import { useEffect, useRef, useState } from 'react';
import { removeBackgroundFromImage } from '@/lib/backgroundRemoval';

interface ProcessingCanvasProps {
  original: string;
  processed: string | null;
  mode: 'background' | 'watermark';
  onProcessed: (dataUrl: string) => void;
  processing: boolean;
  setProcessing: (v: boolean) => void;
  onReset: () => void;
}

export default function ProcessingCanvas({
  original,
  processed,
  mode,
  onProcessed,
  processing,
  setProcessing,
  onReset
}: ProcessingCanvasProps) {
  const processImage = async () => {
    // 将 dataURL 转为 File
    const response = await fetch(original);
    const blob = await response.blob();
    const file = new File([blob], 'image.png', { type: 'image/png' });

    try {
      if (mode === 'background') {
        const resultBlob = await removeBackgroundFromImage(file);
        const url = URL.createObjectURL(resultBlob);
        onProcessed(url);
      } else {
        // 水印功能暂未实现，返回原图
        onProcessed(original);
      }
    } catch (err) {
      console.error('Processing failed:', err);
      onProcessed(original);
    } finally {
      setProcessing(false);
    }
  };

  useEffect(() => {
    if (original && !processed && !processing) {
      setProcessing(true);
      requestAnimationFrame(() => {
        setTimeout(processImage, 100);
      });
    }
  }, [original, processed, processing, mode]);

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* 原图 */}
        <div>
          <h3 className="font-bold mb-3 text-sm text-gray-700 uppercase">原图</h3>
          <div className="border rounded-xl overflow-hidden bg-gray-50 aspect-square flex items-center justify-center">
            <img src={original} alt="Original" className="max-w-full max-h-full object-contain" />
          </div>
        </div>

        {/* 处理后 */}
        <div>
          <h3 className="font-bold mb-3 text-sm text-gray-700 uppercase">处理后</h3>
          <div className="border rounded-xl overflow-hidden bg-gray-50 aspect-square flex items-center justify-center relative">
            {processing ? (
              <div className="absolute inset-0 flex items-center justify-center bg-white/80">
                <div className="text-center">
                  <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto mb-2"></div>
                  <p className="text-sm text-gray-600">处理中...</p>
                </div>
              </div>
            ) : processed ? (
              <img src={processed} alt="Processed" className="max-w-full max-h-full object-contain" />
            ) : (
              <p className="text-gray-500 text-sm">等待处理</p>
            )}
          </div>
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => {
            if (processed) {
              const a = document.createElement('a');
              a.href = processed;
              a.download = `cleaned-${mode === 'background' ? 'nobg' : 'nowm'}.png`;
              a.click();
            }
          }}
          disabled={!processed}
          className="px-6 py-3 bg-gray-900 text-white rounded-xl font-medium disabled:opacity-50 disabled:pointer-events-none"
        >
          下载结果
        </button>
        <button
          onClick={() => {
            onReset();
          }}
          className="px-6 py-3 bg-gray-100 text-gray-900 rounded-xl font-medium hover:bg-gray-200 transition"
        >
          重新选择
        </button>
      </div>

      {/* 隐藏的 Canvas 用于图像处理 */}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}
