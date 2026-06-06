# ⚡ Codex 插件市场

一个轻量的社区驱动插件市场，为 **Codex CLI** 寻找和分享插件。

🌐 **在线访问**: https://wangjiaqi13.github.io/codex-plugin-market/

---

## 插件列表

| 插件 | 分类 | 描述 |
|------|------|------|
| Codex Coding Agent | 开发工具 | 增强的编程助手 |
| Codex Browser | 自动化 | 在 Codex CLI 中控制浏览器 |
| Codex ImageGen | 创作 | 生成和编辑图片 |
| Codex Spreadsheet | 文档处理 | 创建和分析电子表格 |
| Codex PDF Toolkit | 文档处理 | 读取、创建和转换 PDF |
| Codex Document | 文档处理 | 生成和编辑 Word 文档 |
| Codex Slides | 文档处理 | 一键生成 PPT 幻灯片 |
| Codex Security Review | 开发工具 | 自动代码安全审查 |

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
