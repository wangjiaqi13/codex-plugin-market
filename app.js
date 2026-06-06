// ===== 状态 =====
let plugins = [];
let currentCategory = 'all';

// ===== 加载数据 =====
async function loadPlugins() {
  try {
    const res = await fetch('plugins/plugins.json');
    const data = await res.json();
    plugins = data.plugins;
    renderPlugins(plugins);
  } catch (err) {
    document.getElementById('pluginsGrid').innerHTML =
      '<div class="empty-state visible" style="grid-column:1/-1"><p>⚠️ 加载插件数据失败，请刷新重试</p></div>';
  }
}

// ===== 渲染 =====
function renderPlugins(list) {
  const grid = document.getElementById('pluginsGrid');
  const count = document.getElementById('pluginCount');
  const sortBy = document.getElementById('sortSelect').value;

  // 排序
  const sorted = [...list].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return b[sortBy] - a[sortBy];
  });

  if (sorted.length === 0) {
    grid.innerHTML = '';
    document.getElementById('emptyState').classList.add('visible');
    count.textContent = '0';
    return;
  }
  document.getElementById('emptyState').classList.remove('visible');
  count.textContent = sorted.length;

  grid.innerHTML = sorted.map(p => `
    <div class="plugin-card">
      <div class="plugin-card-header">
        <span class="plugin-name">${p.name}</span>
        <span class="plugin-version">v${p.version}</span>
      </div>
      <div class="plugin-author">by ${p.author}</div>
      <div class="plugin-desc">${p.description}</div>
      <div class="plugin-tags">
        ${p.tags.map(t => `<span>#${t}</span>`).join('')}
      </div>
      <div class="plugin-card-footer">
        <div class="plugin-stats">
          <span>⬇️ ${formatNum(p.downloads)}</span>
          <span>⭐ ${p.stars}</span>
        </div>
        <button class="install-btn" onclick="copyInstall('${p.install}', this)">
          📋 ${p.install}
        </button>
      </div>
    </div>
  `).join('');
}

// ===== 搜索 =====
function filterPlugins() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  let filtered = plugins;

  // 分类过滤
  if (currentCategory !== 'all') {
    filtered = filtered.filter(p => p.category === currentCategory);
  }

  // 关键词搜索
  if (q) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q)) ||
      p.author.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  renderPlugins(filtered);
}

// ===== 分类切换 =====
function filterByCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.cat-tab').forEach(el => {
    el.classList.toggle('active', el.dataset.cat === cat);
  });
  filterPlugins();
}

// ===== 复制安装命令 =====
function copyInstall(cmd, btn) {
  navigator.clipboard.writeText(cmd).then(() => {
    btn.textContent = '✅ 已复制!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = `📋 ${cmd}`;
      btn.classList.remove('copied');
    }, 2000);
  });
}

// ===== 数字格式化 =====
function formatNum(n) {
  if (n >= 10000) return (n / 10000).toFixed(1) + 'w';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
  return n;
}

// ===== 启动 =====
loadPlugins();
