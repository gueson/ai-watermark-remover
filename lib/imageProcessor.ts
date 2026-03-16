export interface ProcessingOptions {
  mode: 'background' | 'watermark';
  progress?: (p: number) => void;
}

export async function processImageWithAI(
  imageData: ImageData,
  options: ProcessingOptions
): Promise<ImageData> {
  const { mode } = options;
  const data = imageData.data;
  const output = new Uint8ClampedArray(data.length);

  if (mode === 'background') {
    // 简化的背景移除：白色背景透明化（实际应接 ONNX 输出 mask）
    // 阈值可调，或基于机器学习
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i], g = data[i + 1], b = data[i + 2];
      const brightness = (r + g + b) / 3;
      if (brightness > 230) {
        output[i + 3] = 0;
      } else {
        output[i] = r;
        output[i + 1] = g;
        output[i + 2] = b;
        output[i + 3] = 255;
      }
    }
  } else {
    // 水印去除：这里仅模拟（实际需要 inpaint 模型）
    // 暂不处理，返回原图
    for (let i = 0; i < data.length; i += 4) {
      output[i] = data[i];
      output[i + 1] = data[i + 1];
      output[i + 2] = data[i + 2];
      output[i + 3] = data[i + 3];
    }
  }

  return new ImageData(output, imageData.width, imageData.height);
}
