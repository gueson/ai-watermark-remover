# AI Image Cleaner

基于 remove.bg API 的高质量背景移除工具，支持纯前端降级方案。

## 特性

- 高质量 AI 背景移除（remove.bg API）
- 可选本地简化算法（无需 API Key）
- 隐私灵活：无 Key 时图片不上传
- 响应式 UI，Tailwind 风格
- Vercel 一键部署

## 快速开始

```bash
cd /root/.openclaw/workspace/project/ai-watermark-remover
npm install
npm run dev
```

访问 http://localhost:3000

## 配置 API Key（可选）

1. 注册获取 API Key：https://www.remove.bg/api
2. 在页面输入框粘贴并保存（存储在浏览器 localStorage）

有 API Key 时：图片上传至 remove.bg 处理，效果优秀
无 API Key 时：使用本地简化算法（仅适合白底图）

## 部署到 Vercel

```bash
npm run build
vercel --prod
```

无需环境变量，纯静态部署。

## 技术栈

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- remove.bg REST API

## 成本

- remove.bg 免费额度：每月 50 张
- 超出后按需付费（约 $0.09/张）
- 本地模式完全免费

## 项目结构

- `app/` - 页面与布局
- `components/` - 上传组件与预览画布
- `lib/` - API 封装
