# AI Image Cleaner

隐私优先的 AI 图片处理工具：去背景 + 去水印。完全在浏览器本地运行，绝不上传图片。

## 特性

- 100% 客户端处理（使用 ONNX Runtime Web）
- 隐私绝对安全：图片不出设备
- 免费无限制
- 响应式设计，移动端友好
- 极简主义 UI

## 技术栈

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- ONNX Runtime Web
- Fabric.js

## 快速开始

```bash
cd /root/.openclaw/workspace/project/ai-watermark-remover
npm install
npm run dev
```

访问 http://localhost:3000

## 模型集成（可选）

当前版本使用简化算法演示。如需真实 AI 效果：

1. 下载 ONNX 模型（见 MODELS.md）
2. 放入 `public/models/` 目录
3. 修改 `lib/onnx.ts` 接入推理

## 部署

推荐 Vercel：

```bash
npm run build
vercel --prod
```

或直接推送仓库到 Vercel，自动构建。

## 项目结构

- `app/` - Next.js App Router 页面
- `components/` - React 组件
- `lib/` - 核心逻辑（图像处理、ONNX 接口）
- `public/models/` - 模型文件（需自行添加）
- `public/` - 静态资源

## 架构

浏览器端推理，无后端服务。
