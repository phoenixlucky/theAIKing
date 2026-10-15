/* ===== The King Skills — Main Script ===== */

(async function () {
  'use strict';

  // 当前 Reasonix 编译器已安装的 Skill（对应 skills.json 的 id）
  const REASONIX_INSTALLED_IDS = new Set([5, 9, 11, 20, 21, 22, 23, 24, 36, 84, 100]);
  const INSTALLED_CAT = 'installed';

  // ---- State ----
  let data = null;          // { total, categories, skills }
  let selected = new Set(); // skill ids
  let currentCat = 'all';

  // ---- DOM refs ----
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  const filterBar    = $('#filterBar');
  const searchInput  = $('#searchInput');
  const skillsGrid   = $('#skillsGrid');
  const totalCount   = $('#totalCount');
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
      const resp = await fetch('data/skills.json?v=628dede2');
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      data = await resp.json();
      totalCount.textContent = data.total;
    } catch (e) {
      skillsGrid.innerHTML = `<div class="empty-state"><div class="empty-icon">⚠️</div><p>加载技能数据失败：${e.message}。请确保通过本地服务器访问（如 Live Server）。</p></div>`;
      throw e;
    }
  }

  // ---- Render filters ----
  function renderFilters() {
    const cats = data.categories;
    let html = `<button class="filter-btn${currentCat === 'all' ? ' active' : ''}" data-cat="all">🏠 全部</button>`;
    // 「⚡ reasonix 推荐」筛选：当前编译器已装的 Skill，与其他分类筛选功能一致
    html += `<button class="filter-btn${currentCat === INSTALLED_CAT ? ' active' : ''}" data-cat="${INSTALLED_CAT}">⚡ Reasonix 推荐</button>`;
    for (const c of cats) {
      html += `<button class="filter-btn" data-cat="${c.id}">${c.icon} ${c.name}</button>`;
    }
    filterBar.innerHTML = html;

    filterBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCat = btn.dataset.cat;
      renderGrid();
    });
  }

  // ---- Color helper ----
  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1,3), 16);
    const g = parseInt(hex.slice(3,5), 16);
    const b = parseInt(hex.slice(5,7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  }

  // ---- Render skill cards ----
  function renderGrid() {
    const keyword = searchInput.value.trim().toLowerCase();
    let skills = data.skills;

    // Build category lookup
    const catMap = {};
    for (const c of data.categories) {
      catMap[c.id] = c;
    }

    // Filter by category（installed = 当前 Reasonix 编译器已装的 Skill）
    if (currentCat === INSTALLED_CAT) {
      skills = skills.filter(s => REASONIX_INSTALLED_IDS.has(s.id));
    } else if (currentCat !== 'all') {
      skills = skills.filter(s => s.cat === currentCat);
    }

    // Filter by search
    if (keyword) {
      skills = skills.filter(s =>
        s.name.toLowerCase().includes(keyword) ||
        s.desc.toLowerCase().includes(keyword) ||
        s.source.toLowerCase().includes(keyword)
      );
    }

    // Update select-all button text based on visible skills state
    updateSelectAllBtn(skills);

    // Sort: golden (own) skills first, then by id
    const isOwnSkill = (s) => s.source === 'phoenixlucky';
    skills.sort((a, b) => (isOwnSkill(b) - isOwnSkill(a)) || (a.id - b.id));

    if (skills.length === 0) {
      skillsGrid.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><p>没有匹配的 Skill</p></div>`;
      updateStats();
      return;
    }

    let html = '';
    for (const s of skills) {
      const isSelected = selected.has(s.id);
      const starBadge = s.stars ? `<span class="skill-stars">${s.stars}</span>` : '';
      const cat = catMap[s.cat];
      const catTag = cat ? (() => {
        const c = cat.color || '#4f46e5';
        const bg = hexToRgba(c, 0.15);
        const bd = hexToRgba(c, 0.3);
        return `<span class="skill-cat" style="--cat-color:${c};--cat-bg:${bg};--cat-border:${bd}">${cat.icon} ${cat.name}</span>`;
      })() : '';
      const repoLink = s.repo && !s.repo.startsWith('搜索') 
        ? (() => {
            const host = new URL(s.repo).hostname;
            const label = host === 'clawhub.ai' ? 'ClawHub' : (s.source && s.source.includes('Hermes') ? 'Hermes' : 'GitHub');
            return `<a href="${s.repo}" class="skill-repo" target="_blank" rel="noopener" title="${s.repo}">${label} ↗</a>`;
          })()
        : '';
      const isOwn = s.source === 'phoenixlucky';
      const ownBadge = isOwn ? '<span class="skill-badge">👑 精选</span>' : '';
      html += `
        <div class="skill-card ${isSelected ? 'selected' : ''}${isOwn ? ' skill-card--own' : ''}" data-id="${s.id}">
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
    skillsGrid.innerHTML = html;

    updateStats();
  }

  // ---- Toggle skill selection ----
  function toggleSkill(id) {
    if (selected.has(id)) {
      selected.delete(id);
    } else {
      selected.add(id);
    }
    // Re-render just the affected card
    const card = skillsGrid.querySelector(`.skill-card[data-id="${id}"]`);
    if (card) {
      card.classList.toggle('selected');
      const check = card.querySelector('.skill-check');
      check.textContent = selected.has(id) ? '✓' : '';
    }
    updateStats();
    outputSection.style.display = 'none';
  }

  // ---- Update stats ----
  function updateStats() {
    selectedCount.textContent = selected.size;
  }

  // ---- Generate install instructions ----
  function generateInstructions() {
    const ids = [...selected].sort((a, b) => a - b);
    if (ids.length === 0) {
      showToast('请先勾选至少一个 Skill');
      return;
    }

    const skills = ids.map(id => data.skills.find(s => s.id === id)).filter(Boolean);

    // Build category groups
    const catMap = {};
    for (const c of data.categories) {
      catMap[c.id] = c;
    }

    const groups = {};
    for (const s of skills) {
      const catName = catMap[s.cat] ? catMap[s.cat].name : s.cat;
      if (!groups[catName]) groups[catName] = [];
      groups[catName].push(s);
    }

    let text = '请依次阅读并安装以下 Skill。\n具体技能\n\n';

    for (const [catName, items] of Object.entries(groups)) {
      text += `【${catName}】\n`;
      for (const s of items) {
        const star = s.stars ? `（${s.stars}）` : '';
        const repo = s.repo && !s.repo.startsWith('搜索') ? `\n   地址：${s.repo}` : '';
        text += `${s.name} — ${s.source}${star}，${s.desc}${repo}\n`;
      }
      text += '\n';
    }

    text += '请根据上面每个 Skill 的「安装指令」完成安装，如果存在，则覆盖安装。\n';

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
      // Fallback
      outputText.select();
      document.execCommand('copy');
      showToast('✅ 已复制到剪贴板');
    }
  }

  // ---- Select All / Deselect All ----
  function toggleSelectAll() {
    const keyword = searchInput.value.trim().toLowerCase();
    let visible = data.skills;
    if (currentCat === INSTALLED_CAT) {
      visible = visible.filter(s => REASONIX_INSTALLED_IDS.has(s.id));
    } else if (currentCat !== 'all') {
      visible = visible.filter(s => s.cat === currentCat);
    }
    if (keyword) {
      visible = visible.filter(s =>
        s.name.toLowerCase().includes(keyword) ||
        s.desc.toLowerCase().includes(keyword) ||
        s.source.toLowerCase().includes(keyword)
      );
    }

    const visibleIds = new Set(visible.map(s => s.id));
    const allSelected = [...visibleIds].every(id => selected.has(id));

    if (allSelected && [...visibleIds].some(id => selected.has(id))) {
      // Deselect all visible
      for (const id of visibleIds) selected.delete(id);
      selectAllBtn.textContent = '✅ 全选';
    } else {
      // Select all visible
      for (const id of visibleIds) selected.add(id);
      selectAllBtn.textContent = '取消全选';
    }

    renderGrid();
    outputSection.style.display = 'none';
  }

  // ---- Update select-all button text ----
  function updateSelectAllBtn(visibleSkills) {
    if (visibleSkills.length === 0) {
      selectAllBtn.textContent = '✅ 全选';
      return;
    }
    const allSelected = visibleSkills.every(s => selected.has(s.id));
    selectAllBtn.textContent = allSelected ? '取消全选' : '✅ 全选';
  }

  // ---- Clear selection ----
  function clearSelection() {
    selected.clear();
    skillsGrid.querySelectorAll('.skill-card').forEach(c => {
      c.classList.remove('selected');
      c.querySelector('.skill-check').textContent = '';
    });
    selectAllBtn.textContent = '✅ 全选';
    updateStats();
    outputSection.style.display = 'none';
    showToast('已清除所有选择');
  }

  // ---- Search ----
  searchInput.addEventListener('input', () => {
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

      // Click skill card to toggle selection
      skillsGrid.addEventListener('click', (e) => {
        if (e.target.closest('a')) return;
        const card = e.target.closest('.skill-card');
        if (!card) return;
        const id = parseInt(card.dataset.id);
        toggleSkill(id);
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

/* ===== The King Skills — LSP 推荐（独立板块，独立勾选与安装指令） ===== */
(async function () {
  'use strict';

  // ---- State ----
  let lspData = null;       // { total, items }
  const selected = new Set(); // lsp ids

  // ---- DOM refs ----
  const $ = (s) => document.querySelector(s);

  const lspGrid         = $('#lspGrid');
  const lspTotalCount   = $('#lspTotalCount');
  const lspSelectedCount = $('#lspSelectedCount');
  const lspSelectAllBtn = $('#lspSelectAllBtn');
  const lspGenerateBtn  = $('#lspGenerateBtn');
  const lspClearBtn     = $('#lspClearBtn');
  const lspOutputSection = $('#lspOutputSection');
  const lspOutputText   = $('#lspOutputText');
  const lspCopyBtn      = $('#lspCopyBtn');
  const toast           = $('#toast');

  let toastTimer = null;

  function showToast(msg) {
    clearTimeout(toastTimer);
    toast.textContent = msg;
    toast.classList.add('show');
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
  }

  function repoLabel(url) {
    try {
      return new URL(url).hostname;
    } catch {
      return '';
    }
  }

  // ---- Load data ----
  async function loadData() {
    try {
      const resp = await fetch('data/lsp.json?v=1');
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      lspData = await resp.json();
      lspTotalCount.textContent = lspData.total;
    } catch (e) {
      lspGrid.innerHTML = `<div class="empty-state"><div class="empty-icon">⚠️</div><p>加载 LSP 数据失败：${e.message}</p></div>`;
      throw e;
    }
  }

  function ratingStars(n) {
    const full = Math.max(0, Math.min(5, n));
    return `<span class="lsp-rating" title="推荐程度 ${full}/5">${'⭐'.repeat(full)}</span>`;
  }

  // ---- Render LSP cards ----
  function renderGrid() {
    let html = '';
    for (const item of lspData.items) {
      const isSelected = selected.has(item.id);
      html += `
        <div class="skill-card lsp-card ${isSelected ? 'selected' : ''}" data-id="${item.id}">
          <div class="skill-check">${isSelected ? '✓' : ''}</div>
          <div class="skill-body">
            <div class="skill-header">
              <span class="skill-icon">${item.icon}</span>
              <span class="skill-name">${item.lsp}</span>
              <span class="skill-cat lsp-lang">${item.lang}</span>
              ${ratingStars(item.rating)}
              <span class="skill-source">${item.category}</span>
              <a href="${item.repo}" class="skill-repo" target="_blank" rel="noopener" title="${item.repo}">${repoLabel(item.repo)} ↗</a>
            </div>
            <div class="skill-desc">${item.desc}</div>
            <div class="lsp-install">$ ${item.install}</div>
          </div>
        </div>
      `;
    }
    lspGrid.innerHTML = html;
    updateStats();
  }

  function updateStats() {
    lspSelectedCount.textContent = selected.size;
    const allSelected = lspData.items.length > 0 && selected.size === lspData.items.length;
    lspSelectAllBtn.textContent = allSelected ? '取消全选' : '✅ 全选';
  }

  function toggleItem(id) {
    if (selected.has(id)) selected.delete(id);
    else selected.add(id);

    const card = lspGrid.querySelector(`.skill-card[data-id="${id}"]`);
    if (card) {
      card.classList.toggle('selected');
      card.querySelector('.skill-check').textContent = selected.has(id) ? '✓' : '';
    }
    updateStats();
    lspOutputSection.style.display = 'none';
  }

  function toggleSelectAll() {
    const allSelected = lspData.items.length > 0 && selected.size === lspData.items.length;
    selected.clear();
    if (!allSelected) {
      for (const item of lspData.items) selected.add(item.id);
    }
    renderGrid();
    lspOutputSection.style.display = 'none';
  }

  function clearSelection() {
    selected.clear();
    renderGrid();
    lspOutputSection.style.display = 'none';
    showToast('已清除所有 LSP 选择');
  }

  function generateInstructions() {
    const ids = [...selected].sort((a, b) => a - b);
    if (ids.length === 0) {
      showToast('请先勾选至少一个 LSP');
      return;
    }

    const items = ids.map(id => lspData.items.find(i => i.id === id)).filter(Boolean);

    let text = '请为当前项目配置并安装以下语言服务器（LSP），以便获得类型分析、跳转与重构能力。\n';
    text += '如果对应语言服务器已安装，请检查版本并升级到最新版。\n\n';

    for (const i of items) {
      text += `【${i.lang}】${i.lsp}（推荐程度 ${i.rating}/5）\n`;
      text += `   说明：${i.desc}\n`;
      text += `   安装：${i.install}\n`;
      text += `   地址：${i.repo}\n\n`;
    }

    text += '安装完成后，请根据所用 AI Agent / 编辑器的配置方式启用这些 LSP，并确认能正常启动。\n';

    lspOutputText.value = text;
    lspOutputSection.style.display = 'block';
    lspOutputSection.scrollIntoView({ behavior: 'smooth' });
  }

  async function copyOutput() {
    try {
      await navigator.clipboard.writeText(lspOutputText.value);
      showToast('✅ 已复制到剪贴板');
    } catch {
      lspOutputText.select();
      document.execCommand('copy');
      showToast('✅ 已复制到剪贴板');
    }
  }

  // ---- Init ----
  async function init() {
    try {
      await loadData();
      renderGrid();

      lspGrid.addEventListener('click', (e) => {
        if (e.target.closest('a')) return;
        const card = e.target.closest('.skill-card');
        if (!card) return;
        toggleItem(parseInt(card.dataset.id, 10));
      });

      lspGenerateBtn.addEventListener('click', generateInstructions);
      lspSelectAllBtn.addEventListener('click', toggleSelectAll);
      lspClearBtn.addEventListener('click', clearSelection);
      lspCopyBtn.addEventListener('click', copyOutput);
    } catch (e) {
      console.error('LSP init failed:', e);
    }
  }

  init();
})();
