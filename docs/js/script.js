/* ===== The AI King — Main Script ===== */

(async function () {
  'use strict';

  // 当前 Reasonix 编译器已安装的 Skill（对应 skills.json 的 id）
  const REASONIX_INSTALLED_IDS = new Set([5, 9, 11, 20, 21, 22, 23, 24, 36, 84, 100]);
  const INSTALLED_CAT = 'installed';
  const LSP_CAT = 'lsp';

  // ---- State ----
  let data = null;          // { total, categories, skills }
  let lspData = null;       // { total, items }
  const selected = new Set(); // 's<id>' / 'l<id>'
  let currentCat = 'all';

  const keyOf = (type, id) => `${type}${id}`;

  // ---- DOM refs ----
  const $ = (s) => document.querySelector(s);

  const filterBar    = $('#filterBar');
  const searchInput  = $('#searchInput');
  const skillsGrid   = $('#skillsGrid');
  const totalCount   = $('#totalCount');
  const skillCountEl = $('#skillCount');
  const pluginCountEl = $('#pluginCount');
  const lspTotalEl   = $('#lspTotalCount');
  const categoryCountEl = $('#categoryCount');
  const selectedCount = $('#selectedCount');
  const generateBtn  = $('#generateBtn');
  const selectAllBtn = $('#selectAllBtn');
  const clearBtn     = $('#clearBtn');
  const outputSection = $('#outputSection');
  const outputText   = $('#outputText');
  const copyBtn      = $('#copyBtn');
  const toast        = $('#toast');

  let toastTimer = null;

  // ---- Toast ----
  function showToast(msg) {
    clearTimeout(toastTimer);
    toast.textContent = msg;
    toast.classList.add('show');
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
  }

  // ---- Load data ----
  async function loadData() {
    try {
      const [skillsResp, lspResp] = await Promise.all([
        fetch('data/skills.json?v=97f5ce32'),
        fetch('data/lsp.json?v=1'),
      ]);
      if (!skillsResp.ok) throw new Error(`HTTP ${skillsResp.status}`);
      if (!lspResp.ok) throw new Error(`HTTP ${lspResp.status}`);
      data = await skillsResp.json();
      lspData = await lspResp.json();
      totalCount.textContent = data.total;
    } catch (e) {
      skillsGrid.innerHTML = `<div class="empty-state"><div class="empty-icon">⚠️</div><p>加载数据失败：${e.message}。请确保通过本地服务器访问（如 Live Server）。</p></div>`;
      throw e;
    }
  }

  // ---- Color helper ----
  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  }

  function repoLabel(url) {
    try {
      return new URL(url).hostname;
    } catch {
      return '';
    }
  }

  // ---- Render filters ----
  function renderFilters() {
    const counts = {};
    for (const s of data.skills) counts[s.cat] = (counts[s.cat] ?? 0) + 1;
    const installedCount = data.skills.filter(s => REASONIX_INSTALLED_IDS.has(s.id)).length;
    const cats = data.categories.filter(c => counts[c.id]);

    const summary = $('#filterSummary');
    const pluginCount = data.skills.filter(s => s.cat === 'dsh').length;
    const skillCount = data.total - pluginCount;

    if (summary) {
      summary.textContent = `${cats.length} 个分类 · ${skillCount} 个 Skill · ${pluginCount} 个插件 · ${lspData.total} 个 LSP`;
    }
    if (totalCount) totalCount.textContent = data.total;
    if (skillCountEl) skillCountEl.textContent = skillCount;
    if (pluginCountEl) pluginCountEl.textContent = pluginCount;
    if (lspTotalEl) lspTotalEl.textContent = lspData.total;
    if (categoryCountEl) categoryCountEl.textContent = cats.length;

    let html = `<button class="filter-btn scope${currentCat === 'all' ? ' active' : ''}" data-cat="all" aria-pressed="${currentCat === 'all'}"><span class="filter-ico">🏠</span>全部<span class="filter-count">${data.total}</span></button>`;
    // 「⚡ reasonix 推荐」筛选：当前编译器已装的 Skill，与其他分类筛选功能一致
    html += `<button class="filter-btn scope${currentCat === INSTALLED_CAT ? ' active' : ''}" data-cat="${INSTALLED_CAT}" aria-pressed="${currentCat === INSTALLED_CAT}"><span class="filter-ico">⚡</span>Reasonix 推荐<span class="filter-count">${installedCount}</span></button>`;
    html += `<span class="filter-divider" aria-hidden="true"></span>`;

    for (const c of cats) {
      const color = c.color || '#4f46e5';
      const active = currentCat === c.id;
      html += `<button class="filter-btn cat${active ? ' active' : ''}" data-cat="${c.id}" aria-pressed="${active}" style="--cat-color:${color};--cat-bg:${hexToRgba(color, .1)};--cat-border:${hexToRgba(color, .28)}"><span class="filter-ico">${c.icon}</span>${c.name}<span class="filter-count">${counts[c.id]}</span></button>`;
    }

    // LSP 推荐：作为独立板块并入分类筛选
    const lspColor = '#0e7490';
    const lspActive = currentCat === LSP_CAT;
    html += `<span class="filter-divider" aria-hidden="true"></span>`;
    html += `<button class="filter-btn cat lsp-chip${lspActive ? ' active' : ''}" data-cat="${LSP_CAT}" aria-pressed="${lspActive}" style="--cat-color:${lspColor};--cat-bg:${hexToRgba(lspColor, .1)};--cat-border:${hexToRgba(lspColor, .28)}"><span class="filter-ico">🧩</span>语言服务器 LSP<span class="filter-count">${lspData.total}</span></button>`;

    filterBar.innerHTML = html;

    filterBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      filterBar.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      currentCat = btn.dataset.cat;
      outputSection.style.display = 'none';
      renderGrid();
    });
  }

  // ---- Visible items for the current filter + search ----
  function getVisible() {
    const keyword = searchInput.value.trim().toLowerCase();

    if (currentCat === LSP_CAT) {
      const items = lspData.items.filter(i =>
        !keyword ||
        i.lsp.toLowerCase().includes(keyword) ||
        i.lang.toLowerCase().includes(keyword) ||
        i.desc.toLowerCase().includes(keyword) ||
        i.category.toLowerCase().includes(keyword)
      );
      return { type: 'lsp', items };
    }

    let skills = data.skills;
    if (currentCat === INSTALLED_CAT) {
      skills = skills.filter(s => REASONIX_INSTALLED_IDS.has(s.id));
    } else if (currentCat !== 'all') {
      skills = skills.filter(s => s.cat === currentCat);
    }
    if (keyword) {
      skills = skills.filter(s =>
        s.name.toLowerCase().includes(keyword) ||
        s.desc.toLowerCase().includes(keyword) ||
        s.source.toLowerCase().includes(keyword)
      );
    }
    // 本站原创条目置顶，其余按 id
    const isOwnSkill = (s) => s.source === 'phoenixlucky';
    skills = [...skills].sort((a, b) => (isOwnSkill(b) - isOwnSkill(a)) || (a.id - b.id));
    return { type: 'skill', items: skills };
  }

  function visibleKeys(visible) {
    const prefix = visible.type === 'lsp' ? 'l' : 's';
    return visible.items.map(item => keyOf(prefix, item.id));
  }

  // ---- Render cards ----
  function renderGrid() {
    const visible = getVisible();
    const keys = visibleKeys(visible);

    if (visible.items.length === 0) {
      skillsGrid.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><p>没有匹配的内容</p></div>`;
      updateSelectAllBtn(keys);
      updateStats();
      return;
    }

    let html = '';
    if (visible.type === 'lsp') {
      html = renderLspCards(visible.items);
    } else {
      html = renderSkillCards(visible.items);
    }

    skillsGrid.innerHTML = html;
    updateSelectAllBtn(keys);
    updateStats();
  }

  function renderSkillCards(skills) {
    const catMap = {};
    for (const c of data.categories) catMap[c.id] = c;

    let html = '';
    for (const s of skills) {
      const key = keyOf('s', s.id);
      const isSelected = selected.has(key);
      const starBadge = s.stars ? `<span class="skill-stars">${s.stars}</span>` : '';
      const cat = catMap[s.cat];
      const catTag = cat ? (() => {
        const c = cat.color || '#4f46e5';
        return `<span class="skill-cat" style="--cat-color:${c};--cat-bg:${hexToRgba(c, 0.15)};--cat-border:${hexToRgba(c, 0.3)}">${cat.icon} ${cat.name}</span>`;
      })() : '';
      const repoLink = s.repo && !s.repo.startsWith('搜索')
        ? (() => {
            const host = repoLabel(s.repo);
            const label = host === 'clawhub.ai' ? 'ClawHub' : (s.source && s.source.includes('Hermes') ? 'Hermes' : 'GitHub');
            return `<a href="${s.repo}" class="skill-repo" target="_blank" rel="noopener" title="${s.repo}">${label} ↗</a>`;
          })()
        : '';
      const isOwn = s.source === 'phoenixlucky';
      const ownBadge = isOwn ? '<span class="skill-badge">👑 精选</span>' : '';

      html += `
        <div class="skill-card ${isSelected ? 'selected' : ''}${isOwn ? ' skill-card--own' : ''}" data-key="${key}">
          <div class="skill-check">${isSelected ? '✓' : ''}</div>
          <div class="skill-body">
            <div class="skill-header">
              <span class="skill-icon">${s.icon}</span>
              <span class="skill-name">${s.name}</span>
              ${ownBadge}
              ${starBadge}
              ${catTag}
              <span class="skill-source">${s.source}</span>
              ${repoLink}
            </div>
            <div class="skill-desc">${s.desc}</div>
            ${s.updated ? `<div class="skill-updated">🕒 更新于 ${s.updated}</div>` : ''}
          </div>
        </div>
      `;
    }
    return html;
  }

  function renderLspCards(items) {
    let html = '';
    for (const item of items) {
      const key = keyOf('l', item.id);
      const isSelected = selected.has(key);
      const langColor = '#0e7490';
      const stars = '⭐'.repeat(Math.max(0, Math.min(5, item.rating)));

      html += `
        <div class="skill-card lsp-card ${isSelected ? 'selected' : ''}" data-key="${key}">
          <div class="skill-check">${isSelected ? '✓' : ''}</div>
          <div class="skill-body">
            <div class="lsp-top">
              <span class="skill-icon">${item.icon}</span>
              <div class="lsp-title">
                <span class="skill-name">${item.lsp}</span>
                <span class="lsp-meta">
                  <span class="skill-cat lsp-lang" style="--cat-color:${langColor};--cat-bg:${hexToRgba(langColor, 0.12)};--cat-border:${hexToRgba(langColor, 0.28)}">${item.lang}</span>
                  <span class="lsp-rating" title="推荐程度 ${item.rating}/5">${stars}</span>
                  <span class="skill-source">${item.category}</span>
                </span>
              </div>
              <a href="${item.repo}" class="skill-repo" target="_blank" rel="noopener" title="${item.repo}">${repoLabel(item.repo)} ↗</a>
            </div>
            <div class="skill-desc">${item.desc}</div>
            <div class="lsp-install">$ ${item.install}</div>
          </div>
        </div>
      `;
    }
    return html;
  }

  // ---- Toggle one card ----
  function toggleKey(key) {
    if (selected.has(key)) selected.delete(key);
    else selected.add(key);

    const card = skillsGrid.querySelector(`.skill-card[data-key="${key}"]`);
    if (card) {
      card.classList.toggle('selected');
      card.querySelector('.skill-check').textContent = selected.has(key) ? '✓' : '';
    }
    updateStats();
    outputSection.style.display = 'none';
  }

  // ---- Stats ----
  function updateStats() {
    selectedCount.textContent = selected.size;
  }

  function updateSelectAllBtn(keys) {
    if (!keys.length) {
      selectAllBtn.textContent = '✅ 全选';
      return;
    }
    const allSelected = keys.every(k => selected.has(k));
    selectAllBtn.textContent = allSelected ? '取消全选' : '✅ 全选';
  }

  // ---- Generate install instructions ----
  function generateInstructions() {
    if (selected.size === 0) {
      showToast('请先勾选至少一项');
      return;
    }

    const skillIds = [...selected]
      .filter(k => k.startsWith('s'))
      .map(k => Number(k.slice(1)))
      .sort((a, b) => a - b);
    const lspIds = [...selected]
      .filter(k => k.startsWith('l'))
      .map(k => Number(k.slice(1)))
      .sort((a, b) => a - b);

    const skills = skillIds.map(id => data.skills.find(s => s.id === id)).filter(Boolean);
    const lspItems = lspIds.map(id => lspData.items.find(i => i.id === id)).filter(Boolean);

    let text = '请依次阅读并安装以下内容。\n具体项目\n\n';

    if (skills.length) {
      const catMap = {};
      for (const c of data.categories) catMap[c.id] = c;

      const groups = {};
      for (const s of skills) {
        const catName = catMap[s.cat] ? catMap[s.cat].name : s.cat;
        if (!groups[catName]) groups[catName] = [];
        groups[catName].push(s);
      }

      for (const [catName, items] of Object.entries(groups)) {
        text += `【${catName}】\n`;
        for (const s of items) {
          const star = s.stars ? `（${s.stars}）` : '';
          const repo = s.repo && !s.repo.startsWith('搜索') ? `\n   地址：${s.repo}` : '';
          text += `${s.name} — ${s.source}${star}，${s.desc}${repo}\n`;
        }
        text += '\n';
      }
    }

    if (lspItems.length) {
      text += '【语言服务器（LSP）】\n';
      for (const i of lspItems) {
        text += `${i.lsp} — ${i.lang}（推荐 ${i.rating}/5，${i.category}）\n`;
        text += `   说明：${i.desc}\n   安装：${i.install}\n   地址：${i.repo}\n`;
      }
      text += '\n';
    }

    text += '请根据上面每一项的「安装指令」完成安装，如果存在，则覆盖安装。\n';

    outputText.value = text;
    outputSection.style.display = 'block';
    outputSection.scrollIntoView({ behavior: 'smooth' });
  }

  // ---- Copy to clipboard ----
  async function copyOutput() {
    try {
      await navigator.clipboard.writeText(outputText.value);
      showToast('✅ 已复制到剪贴板');
    } catch {
      outputText.select();
      document.execCommand('copy');
      showToast('✅ 已复制到剪贴板');
    }
  }

  // ---- Select All / Deselect All ----
  function toggleSelectAll() {
    const keys = visibleKeys(getVisible());
    if (!keys.length) return;

    const allSelected = keys.every(k => selected.has(k));
    if (allSelected) {
      for (const k of keys) selected.delete(k);
    } else {
      for (const k of keys) selected.add(k);
    }

    renderGrid();
    outputSection.style.display = 'none';
  }

  // ---- Clear selection ----
  function clearSelection() {
    selected.clear();
    renderGrid();
    outputSection.style.display = 'none';
    showToast('已清除所有选择');
  }

  // ---- Search ----
  searchInput.addEventListener('input', () => {
    outputSection.style.display = 'none';
    renderGrid();
  });

  // ---- Init ----
  async function init() {
    try {
      await loadData();
      renderFilters();
      renderGrid();

      generateBtn.addEventListener('click', generateInstructions);
      selectAllBtn.addEventListener('click', toggleSelectAll);
      copyBtn.addEventListener('click', copyOutput);
      clearBtn.addEventListener('click', clearSelection);

      // Click card to toggle selection
      skillsGrid.addEventListener('click', (e) => {
        if (e.target.closest('a')) return;
        const card = e.target.closest('.skill-card');
        if (!card || !card.dataset.key) return;
        toggleKey(card.dataset.key);
      });

      // Keyboard shortcut: Ctrl+Enter to generate
      document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
          e.preventDefault();
          generateInstructions();
        }
      });
    } catch (e) {
      console.error('Init failed:', e);
    }
  }

  init();
})();
