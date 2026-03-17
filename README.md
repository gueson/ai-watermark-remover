# AI Image Cleaner

基于 @imgly/background-removal 的高质量背景移除工具，完全在浏览器中运行。

## 特性

- 纯前端 AI 背景移除，无需 API Key
- 隐私保护：图片不上传服务器，完全本地处理
- 高质量模型，支持复杂背景
- 响应式 UI，Tailwind 风格
- Vercel 一键部署

## 快速开始

```bash
cd /root/.openclaw/workspace/project/ai-watermark-remover
npm install
npm run dev
```

访问 http://localhost:3000

## 工作原理

使用 [@imgly/background-removal](https://www.npmjs.com/package/@imgly/background-removal) 库，在浏览器中加载 AI 模型进行推理。首次处理会下载模型文件（约 100MB），之后可离线使用。

## 部署到 Vercel

```bash
npm run build
vercel --prod
```

纯静态部署，无需环境变量。

## 技术栈

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- @imgly/background-removal

## 项目结构

- `app/` - 页面与布局
- `components/` - 上传组件与预览画布
- `lib/` - 背景移除封装
