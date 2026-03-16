# AI Image Cleaner

隐私优先的 AI 图片处理工具：去背景 + 去水印。完全在浏览器本地运行，绝不上传图片。

## 特性

- 100% 客户端处理（使用 @imgly/background-removal）
- 隐私绝对安全：图片不出设备
- 免费无限制
- 响应式设计，移动端友好
- 极简主义 UI

## 技术栈

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- @imgly/background-removal（自动下载模型）

## 快速开始

```bash
cd /root/.openclaw/workspace/project/ai-watermark-remover
npm install
npm run dev
```

访问 http://localhost:3000

## 模型管理

背景移除模型由 `@imgly/background-removal` 自动下载并缓存（存储在浏览器 IndexedDB）。首次使用需联网下载模型（约 50MB），之后离线可用。

如需手动清除模型缓存：浏览器设置 → 清除网站数据。

## 部署

推荐 Vercel：

```bash
npm run build
vercel --prod
```

## 项目结构

- `app/` - Next.js App Router 页面
- `components/` - React 组件
- `lib/` - 核心逻辑
- `public/` - 静态资源

## 架构

浏览器端推理，无后端服务。
