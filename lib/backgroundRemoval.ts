import type { InferenceSession } from 'onnxruntime-web';

// 动态导入，避免 Next.js 服务端打包
export async function removeBackgroundFromImage(file: File): Promise<Blob> {
  const { removeBackground } = await import('@imgly/background-removal');
  const result = await removeBackground(file);
  return result;
}
