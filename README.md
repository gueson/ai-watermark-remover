# AI Image Cleaner

隐私优先的图片处理工具：去背景 + 去水印。完全在浏览器本地运行，绝不上传图片。

## 特性

- 100% 客户端处理
- 隐私绝对安全：图片不出设备
- 免费无限制
- 响应式设计，移动端友好
- 极简主义 UI

## 技术栈

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- 纯前端图像处理（Canvas API）

## 快速开始

```bash
cd /root/.openclaw/workspace/project/ai-watermark-remover
npm install
npm run dev
```

访问 http://localhost:3000

## 当前功能说明

**背景移除**：使用简化算法，可清除纯色浅背景（如白底图）。复杂背景效果有限。

**水印去除**：待开发。

## 升级为 AI 效果（可选）

如需真实 AI 效果，可自行集成 ONNX 模型：
1. 下载 RMBG-1.4 或 LaMa ONNX 模型
2. 放入 `public/models/` 目录
3. 修改 `lib/` 相关代码接入推理

`@imgly/background-removal` 因构建兼容性问题暂不启用。

## 部署

推荐 Vercel：

```bash
npm run build
vercel --prod
```

## 项目结构

- `app/` - Next.js App Router 页面
- `components/` - React 组件
- `lib/` - 核心逻辑（预留 ONNX 接口）
- `public/` - 静态资源

## 架构

纯静态托管，无后端服务。
