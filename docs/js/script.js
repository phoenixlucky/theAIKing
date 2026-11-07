/* ===== The AI King — Main Script ===== */

(function () {
  'use strict';

  // 当前 Reasonix 编译器已安装的 Skill（对应 skills.json 的 id）
  const REASONIX_INSTALLED_IDS = new Set([5, 9, 11, 20, 21, 22, 23, 24, 36, 84, 100]);
  const INSTALLED_CAT = 'installed';
  const LSP_CAT = 'lsp';

  // ---- i18n ----
  const CAT_EN = {
    basic: 'Skills & Meta',
    agent: 'Agent Intelligence',
    dev: 'Development',
    frontend: 'Frontend & Design',
    content: 'Content Creation',
    document: 'Documents',
    video: 'Video Production',
    business: 'Business & Finance',
    integration: 'Integrations',
    search: 'Search & Browsing',
    scrape: 'Scraping',
    automation: 'Terminal & Automation',
    life: 'Life & Media',
    dsh: 'DeepSeek Harness Plugins',
  };

  const I18N = {
    zh: {
      pageTitle: 'The AI King — AI Agent Skill / 插件 / LSP 索引',
      subtitle: '收集热门且好用的 AI Agent Skill、插件与 LSP，指导各种 AI Agent 快速一键安装配置',
      meta: '共收录 <strong>{skills}</strong> 个 Skill + <strong>{plugins}</strong> 个插件（<strong>{total}</strong> 个条目），另有 <strong>{lsp}</strong> 个 LSP · 覆盖 <strong>{cats}</strong> 大分类 · <span class="gold-hint">👑 金色卡片 = 本站原创精选，已置顶展示</span>',
      filterKicker: '分类筛选',
      filterSummary: '{cats} 个分类 · {skills} 个 Skill · {plugins} 个插件 · {lsp} 个 LSP',
      searchPlaceholder: '搜索技能名称或描述…',
      filterAria: '技能分类筛选',
      all: '全部',
      reasonix: 'Reasonix 推荐',
      lspFilter: '语言服务器 LSP',
      selectedLabel: '已选',
      itemUnit: '项',
      selectAll: '✅ 全选',
      deselectAll: '取消全选',
      generate: '📋 生成安装指令',
      clear: '清除选择',
      outputTitle: '📋 安装指令',
      outputHint: '将下方内容直接提供给 AI Agent：',
      copy: '📄 复制到剪贴板',
      footer: '由 <a href="https://github.com/phoenixlucky/theAIKing" target="_blank">theAIKing</a> 项目维护 · 欢迎提交 Issue 和 PR',
      empty: '没有匹配的内容',
      loadError: '加载数据失败：{msg}。请确保通过本地服务器访问（如 Live Server）。',
      toastCopied: '✅ 已复制 {text}',
      toastCopyFail: '复制失败，请手动选择包名',
      toastPickFirst: '请先勾选至少一项',
      toastClipboard: '✅ 已复制到剪贴板',
      toastCleared: '已清除所有选择',
      updated: '🕒 更新于',
      copyPkg: '复制',
      pick: '👑 精选',
      rating: '推荐程度 {n}/5',
      genIntro: '请依次阅读并安装以下内容。\n具体项目\n\n',
      genGroup: '【{cat}】\n',
      genRepo: '   地址：{url}',
      genSep: '，',
      genStars: '（{stars}）',
      genLspGroup: '【语言服务器（LSP）】\n',
      genOutro: '请根据上面每一项的「安装指令」完成安装，如果存在，则覆盖安装。\n',
    },
    en: {
      pageTitle: 'The AI King — AI Agent Skills, Plugins & LSP Index',
      subtitle: 'A curated index of AI Agent skills, plugins and LSPs, with copy-ready install prompts for any agent.',
      meta: '<strong>{skills}</strong> skills + <strong>{plugins}</strong> plugins (<strong>{total}</strong> entries) · <strong>{lsp}</strong> LSPs · <strong>{cats}</strong> categories · <span class="gold-hint">👑 Gold cards = first-party picks, pinned to top</span>',
      filterKicker: 'Filter by category',
      filterSummary: '{cats} categories · {skills} skills · {plugins} plugins · {lsp} LSPs',
      searchPlaceholder: 'Search name or description…',
      filterAria: 'Filter by category',
      all: 'All',
      reasonix: 'Reasonix picks',
      lspFilter: 'Language servers',
      selectedLabel: 'Selected',
      itemUnit: 'items',
      selectAll: '✅ Select all',
      deselectAll: 'Deselect all',
      generate: '📋 Generate install prompt',
      clear: 'Clear',
      outputTitle: '📋 Install prompt',
      outputHint: 'Paste the text below into your AI agent:',
      copy: '📄 Copy to clipboard',
      footer: 'Maintained by <a href="https://github.com/phoenixlucky/theAIKing" target="_blank">theAIKing</a> · Issues and PRs welcome',
      empty: 'Nothing matches',
      loadError: 'Failed to load data: {msg}. Serve the site over HTTP (e.g. Live Server).',
      toastCopied: '✅ Copied {text}',
      toastCopyFail: 'Copy failed — select the package name manually.',
      toastPickFirst: 'Select at least one item first.',
      toastClipboard: '✅ Copied to clipboard',
      toastCleared: 'Selection cleared',
      updated: '🕒 Updated',
      copyPkg: 'Copy',
      pick: '👑 Pick',
      rating: 'Recommendation {n}/5',
      genIntro: 'Please read and install the following items in order.\nItems\n\n',
      genGroup: '[{cat}]\n',
      genRepo: '   URL: {url}',
      genSep: ', ',
      genStars: ' ({stars})',
      genLspGroup: '[Language servers (LSP)]\n',
      genOutro: 'Follow the install instructions for each item above. If already installed, overwrite it.\n',
    },
  };

  let lang = 'zh';
  try {
    if (localStorage.getItem('aiking-lang') === 'en') lang = 'en';
  } catch {}

  const t = (key, vars) => {
    const s = (I18N[lang] && I18N[lang][key]) || I18N.zh[key] || key;
    return vars ? s.replace(/\{(\w+)\}/g, (_, k) => (vars[k] ?? '')) : s;
  };

  const catLabel = (cat) => (lang === 'en' && cat && CAT_EN[cat.id]) ? CAT_EN[cat.id] : (cat ? cat.name : '');

  // ---- State ----
  let data = null;            // { total, categories, skills }
  let lspData = null;         // { total, items }
  const selected = new Set(); // 's<id>' / 'l<id>'
  let currentCat = 'all';

  const keyOf = (type, id) => `${type}${id}`;

  // ---- DOM refs ----
  const $ = (s) => document.querySelector(s);

  const filterBar    = $('#filterBar');
  const searchInput  = $('#searchInput');
  const skillsGrid   = $('#skillsGrid');
  const metaLine     = $('#metaLine');
  const subtitleEl   = $('#subtitle');
  const filterKicker = $('#filterKicker');
  const selectedLabel = $('#selectedLabel');
  const itemUnit     = $('#itemUnit');
  const selectedCount = $('#selectedCount');
  const generateBtn  = $('#generateBtn');
  const selectAllBtn = $('#selectAllBtn');
  const clearBtn     = $('#clearBtn');
  const outputSection = $('#outputSection');
  const outputTitle  = $('#outputTitle');
  const outputHint   = $('#outputHint');
  const outputText   = $('#outputText');
  const copyBtn      = $('#copyBtn');
  const footerText   = $('#footerText');
  const langToggle   = $('#langToggle');
  const toast        = $('#toast');

  let toastTimer = null;

  // ---- Toast ----
  function showToast(msg) {
    clearTimeout(toastTimer);
    toast.textContent = msg;
    toast.classList.add('show');
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
  }

  // ---- Copy text ----
  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      showToast(t('toastCopied', { text }));
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      let ok = false;
      try { ok = document.execCommand('copy'); } catch {}
      document.body.removeChild(ta);
      showToast(ok ? t('toastCopied', { text }) : t('toastCopyFail'));
    }
  }

  // ---- Load data ----
  async function loadData() {
    try {
      const [skillsResp, lspResp] = await Promise.all([
        fetch('data/skills.json?v=a7a6f045'),
        fetch('data/lsp.json?v=1'),
      ]);
      if (!skillsResp.ok) throw new Error(`HTTP ${skillsResp.status}`);
      if (!lspResp.ok) throw new Error(`HTTP ${lspResp.status}`);
      data = await skillsResp.json();
      lspData = await lspResp.json();
    } catch (e) {
      skillsGrid.innerHTML = `<div class="empty-state"><div class="empty-icon">⚠️</div><p>${t('loadError', { msg: e.message })}</p></div>`;
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

  // ---- Static texts ----
  function applyStatic() {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = t('pageTitle');
    if (subtitleEl) subtitleEl.textContent = t('subtitle');
    if (filterKicker) filterKicker.textContent = t('filterKicker');
    searchInput.placeholder = t('searchPlaceholder');
    filterBar.setAttribute('aria-label', t('filterAria'));
    selectedLabel.textContent = t('selectedLabel');
    itemUnit.textContent = t('itemUnit');
    generateBtn.textContent = t('generate');
    clearBtn.textContent = t('clear');
    outputTitle.textContent = t('outputTitle');
    outputHint.textContent = t('outputHint');
    copyBtn.textContent = t('copy');
    footerText.innerHTML = t('footer');
    langToggle.textContent = lang === 'zh' ? 'EN' : '中文';
    langToggle.title = lang === 'zh' ? 'Switch to English' : '切换到中文';
    langToggle.setAttribute('aria-label', langToggle.title);
  }

  // ---- Render filters ----
  function renderFilters() {
    const counts = {};
    for (const s of data.skills) counts[s.cat] = (counts[s.cat] ?? 0) + 1;
    const installedCount = data.skills.filter(s => REASONIX_INSTALLED_IDS.has(s.id)).length;
    const cats = data.categories.filter(c => counts[c.id]);

    const pluginCount = data.skills.filter(s => s.cat === 'dsh').length;
    const skillCount = data.total - pluginCount;

    if (metaLine) {
      metaLine.innerHTML = t('meta', {
        skills: skillCount,
        plugins: pluginCount,
        total: data.total,
        lsp: lspData.total,
        cats: cats.length,
      });
    }

    const summary = $('#filterSummary');
    if (summary) {
      summary.textContent = t('filterSummary', {
        cats: cats.length,
        skills: skillCount,
        plugins: pluginCount,
        lsp: lspData.total,
      });
    }

    let html = `<button class="filter-btn scope${currentCat === 'all' ? ' active' : ''}" data-cat="all" aria-pressed="${currentCat === 'all'}"><span class="filter-ico">🏠</span>${t('all')}<span class="filter-count">${data.total}</span></button>`;
    // 「⚡ reasonix 推荐」筛选：当前编译器已装的 Skill，与其他分类筛选功能一致
    html += `<button class="filter-btn scope${currentCat === INSTALLED_CAT ? ' active' : ''}" data-cat="${INSTALLED_CAT}" aria-pressed="${currentCat === INSTALLED_CAT}"><span class="filter-ico">⚡</span>${t('reasonix')}<span class="filter-count">${installedCount}</span></button>`;
    html += `<span class="filter-divider" aria-hidden="true"></span>`;

    for (const c of cats) {
      const color = c.color || '#4f46e5';
      const active = currentCat === c.id;
      html += `<button class="filter-btn cat${active ? ' active' : ''}" data-cat="${c.id}" aria-pressed="${active}" style="--cat-color:${color};--cat-bg:${hexToRgba(color, .1)};--cat-border:${hexToRgba(color, .28)}"><span class="filter-ico">${c.icon}</span>${catLabel(c)}<span class="filter-count">${counts[c.id]}</span></button>`;
    }

    // LSP 推荐：作为独立板块并入分类筛选
    const lspColor = '#0e7490';
    const lspActive = currentCat === LSP_CAT;
    html += `<span class="filter-divider" aria-hidden="true"></span>`;
    html += `<button class="filter-btn cat lsp-chip${lspActive ? ' active' : ''}" data-cat="${LSP_CAT}" aria-pressed="${lspActive}" style="--cat-color:${lspColor};--cat-bg:${hexToRgba(lspColor, .1)};--cat-border:${hexToRgba(lspColor, .28)}"><span class="filter-ico">🧩</span>${t('lspFilter')}<span class="filter-count">${lspData.total}</span></button>`;

    filterBar.innerHTML = html;
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
        (s.desc || '').toLowerCase().includes(keyword) ||
        (s.source || '').toLowerCase().includes(keyword)
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
      skillsGrid.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><p>${t('empty')}</p></div>`;
      updateSelectAllBtn(keys);
      updateStats();
      return;
    }

    skillsGrid.innerHTML = visible.type === 'lsp'
      ? renderLspCards(visible.items)
      : renderSkillCards(visible.items);

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
        return `<span class="skill-cat" style="--cat-color:${c};--cat-bg:${hexToRgba(c, 0.15)};--cat-border:${hexToRgba(c, 0.3)}">${cat.icon} ${catLabel(cat)}</span>`;
      })() : '';
      const repoLink = s.repo && !s.repo.startsWith('搜索')
        ? (() => {
            const host = repoLabel(s.repo);
            const label = host === 'clawhub.ai' ? 'ClawHub' : (s.source && s.source.includes('Hermes') ? 'Hermes' : 'GitHub');
            return `<a href="${s.repo}" class="skill-repo" target="_blank" rel="noopener" title="${s.repo}">${label} ↗</a>`;
          })()
        : '';
      const isOwn = s.source === 'phoenixlucky';
      const ownBadge = isOwn ? `<span class="skill-badge">${t('pick')}</span>` : '';
      const npmRow = s.npm
        ? `<div class="skill-npm"><span class="skill-npm-label">npm</span><code class="skill-npm-name" title="${s.npm}">${s.npm}</code><button type="button" class="skill-npm-copy" data-npm="${s.npm}" title="${t('copyPkg')}">${t('copyPkg')}</button></div>`
        : '';

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
            ${npmRow}
            ${s.updated ? `<div class="skill-updated">${t('updated')} ${s.updated}</div>` : ''}
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
                  <span class="lsp-rating" title="${t('rating', { n: item.rating })}">${stars}</span>
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
    const n = selected.size;
    selectedCount.textContent = n;
    if (itemUnit) itemUnit.textContent = lang === 'en' ? (n === 1 ? 'item' : 'items') : t('itemUnit');
  }

  function updateSelectAllBtn(keys) {
    if (!keys.length) {
      selectAllBtn.textContent = t('selectAll');
      return;
    }
    const allSelected = keys.every(k => selected.has(k));
    selectAllBtn.textContent = allSelected ? t('deselectAll') : t('selectAll');
  }

  // ---- Generate install instructions ----
  function generateInstructions(viaButton = true) {
    if (selected.size === 0) {
      if (viaButton) showToast(t('toastPickFirst'));
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

    let text = t('genIntro');

    if (skills.length) {
      const catMap = {};
      for (const c of data.categories) catMap[c.id] = c;

      const groups = {};
      for (const s of skills) {
        const cat = catMap[s.cat];
        const catName = cat ? catLabel(cat) : s.cat;
        if (!groups[catName]) groups[catName] = [];
        groups[catName].push(s);
      }

      for (const [catName, items] of Object.entries(groups)) {
        text += t('genGroup', { cat: catName });
        for (const s of items) {
          const star = s.stars ? t('genStars', { stars: s.stars }) : '';
          const repo = s.repo && !s.repo.startsWith('搜索') ? `\n${t('genRepo', { url: s.repo })}` : '';
          text += `${s.name} — ${s.source}${star}${t('genSep')}${s.desc}${repo}\n`;
        }
        text += '\n';
      }
    }

    if (lspItems.length) {
      text += t('genLspGroup');
      for (const i of lspItems) {
        text += `${i.lsp} — ${i.lang} (${t('rating', { n: i.rating })}${t('genSep')}${i.category})\n`;
        text += `   ${i.desc}\n   ${i.install}\n   ${i.repo}\n`;
      }
      text += '\n';
    }

    text += t('genOutro');

    outputText.value = text;
    outputSection.style.display = 'block';
    if (viaButton) outputSection.scrollIntoView({ behavior: 'smooth' });
  }

  // ---- Copy to clipboard ----
  async function copyOutput() {
    try {
      await navigator.clipboard.writeText(outputText.value);
      showToast(t('toastClipboard'));
    } catch {
      outputText.select();
      document.execCommand('copy');
      showToast(t('toastClipboard'));
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
    showToast(t('toastCleared'));
  }

  // ---- Language switch ----
  function setLang(next) {
    lang = next === 'en' ? 'en' : 'zh';
    try { localStorage.setItem('aiking-lang', lang); } catch {}
    applyStatic();
    if (!data) return;
    renderFilters();
    renderGrid();
    if (outputSection.style.display === 'block') generateInstructions(false);
  }

  // ---- Events ----
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

  searchInput.addEventListener('input', () => {
    outputSection.style.display = 'none';
    renderGrid();
  });

  // ---- Init ----
  async function init() {
    applyStatic();
    langToggle.addEventListener('click', () => setLang(lang === 'zh' ? 'en' : 'zh'));

    try {
      await loadData();
      renderFilters();
      renderGrid();

      generateBtn.addEventListener('click', () => generateInstructions(true));
      selectAllBtn.addEventListener('click', toggleSelectAll);
      copyBtn.addEventListener('click', copyOutput);
      clearBtn.addEventListener('click', clearSelection);

      // Click card to toggle selection
      skillsGrid.addEventListener('click', (e) => {
        const copyBtnEl = e.target.closest('[data-npm]');
        if (copyBtnEl) {
          e.preventDefault();
          e.stopPropagation();
          copyText(copyBtnEl.dataset.npm);
          return;
        }
        if (e.target.closest('a')) return;
        const card = e.target.closest('.skill-card');
        if (!card || !card.dataset.key) return;
        toggleKey(card.dataset.key);
      });

      // Keyboard shortcut: Ctrl+Enter to generate
      document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
          e.preventDefault();
          generateInstructions(true);
        }
      });
    } catch (e) {
      console.error('Init failed:', e);
    }
  }

  init();
})();
