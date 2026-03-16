# 模型部署指南

## 所需模型

- **背景移除**：RMBG-1.4 ONNX (~5MB)
- **水印去除**：LaMa ONNX (~10MB)

## 获取模型

1. 下载 RMBG-1.4 ONNX 文件（例如 `rmbg.onnx`）
2. 下载 LaMa ONNX 文件（例如 `lama.onnx`）

推荐来源：
- HuggingFace 搜索 "rmbg onnx"、"lama onnx"
- GitHub: `BAAI/ RMBG-1.4` 转换

## 放置位置

```
public/models/rmbg.onnx
public/models/lama.onnx
```

## 启用 ONNX 推理

在 `lib/onnx.ts` 中配置模型路径，然后将 `processImageWithAI` 替换为 ONNX 推理流程。

目前代码使用简化算法作为演示。接入 ONNX 后，精度将显著提升。
