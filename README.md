# ⚡ Codex 插件市场

一个轻量的社区驱动插件市场，为 **Codex CLI** 寻找和分享插件。

🌐 **在线访问**: https://wangjiaqi13.github.io/codex-plugin-market/
⭐ **GitHub**: https://github.com/wangjiaqi13/codex-plugin-market

---

## 插件列表（共 16 个）

### 开发工具
| 插件 | 描述 | 下载 |
|------|------|------|
| Codex Coding Agent | 增强的编程助手，支持代码生成、重构和调试 | ⬇️ 2.2w |
| Codex MCP Server | MCP 服务器，连接外部工具和数据源 | ⬇️ 1.1w |
| Codex Database | 连接和查询 MySQL、PostgreSQL、SQLite | ⬇️ 9800 |
| Codex Debugger | 断点调试、变量监视和调用栈分析 | ⬇️ 7800 |
| Codex Code Formatter | 自动格式化 20+ 编程语言 | ⬇️ 6800 |
| Codex Docker | 管理 Docker 容器、镜像和 Compose | ⬇️ 6100 |
| Codex Web Search | 搜索网络、文档和代码库 | ⬇️ 5400 |
| Codex API Tester | 发送 HTTP 请求，测试 REST/GraphQL | ⬇️ 4200 |
| Codex Security Review | 自动代码安全审查 | ⬇️ 3800 |

### 文档处理
| 插件 | 描述 | 下载 |
|------|------|------|
| Codex PDF Toolkit | 读取、创建、合并和转换 PDF | ⬇️ 7200 |
| Codex Document | 生成和编辑 Word 文档 | ⬇️ 6200 |
| Codex Spreadsheet | 创建和分析电子表格 | ⬇️ 8300 |
| Codex Slides | 一键生成 PPT 幻灯片 | ⬇️ 4500 |

### 创作
| 插件 | 描述 | 下载 |
|------|------|------|
| Codex ImageGen | AI 绘图和图像处理 | ⬇️ 1.6w |
| Codex Translator | 翻译文本、代码注释和文档 | ⬇️ 3500 |

### 自动化
| 插件 | 描述 | 下载 |
|------|------|------|
| Codex Browser | 在 Codex CLI 中控制浏览器 | ⬇️ 1.3w |

---

## 如何提交插件

1. 准备插件（plugin.json + README.md）
2. 发布到 GitHub 公开仓库
3. 修改 plugins.json 提交 PR

## 插件注册格式

```json
{
  "id": "plugin-id",
  "name": "插件名",
  "version": "1.0.0",
  "author": "作者",
  "description": "功能描述",
  "category": "分类",
  "tags": ["标签1", "标签2"],
  "install": "codex install 插件名",
  "repo": "https://github.com/作者/仓库"
}
```

## License

MIT