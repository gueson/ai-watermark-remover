'use client';

import { useState, useRef, useCallback } from 'react';
import ImageUploader from '@/components/ImageUploader';
import ProcessingCanvas from '@/components/ProcessingCanvas';

export default function Home() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [mode, setMode] = useState<'background' | 'watermark'>('background');

  const handleFile = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setOriginalImage(e.target?.result as string);
      setProcessedImage(null);
    };
    reader.readAsDataURL(file);
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">AI Image Cleaner</h1>
          <nav className="flex gap-4">
            <button
              onClick={() => setMode('background')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                mode === 'background'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              去背景
            </button>
            <button
              onClick={() => setMode('watermark')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                mode === 'watermark'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              去水印
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
          100% 客户端处理 · 隐私绝对安全 · 免费
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          不需要上传图片。所有 AI 处理都在你的浏览器本地完成，图片永远不会离开你的设备。
        </p>
        <div className="inline-block bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-3 text-sm text-yellow-800">
          当前使用演示算法（效果有限）。下载并配置 ONNX 模型可启用完整 AI 效果，参考 <code className="font-mono bg-yellow-100 px-1 rounded">MODELS.md</code>。
        </div>
      </section>

      {/* Upload & Preview */}
      <section className="container mx-auto px-4 pb-16">
        {!originalImage ? (
          <ImageUploader onFile={handleFile} />
        ) : (
          <ProcessingCanvas
            original={originalImage}
            processed={processedImage}
            mode={mode}
            onProcessed={setProcessedImage}
            processing={processing}
            setProcessing={setProcessing}
            onReset={() => {
              setOriginalImage(null);
              setProcessedImage(null);
            }}
          />
        )}
      </section>

      {/* Features */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 py-16">
          <h3 className="text-2xl font-bold text-center mb-12">为什么选择我们</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">隐私优先</h4>
              <p className="text-gray-600 text-sm">图片完全在本地处理，不上传服务器</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">快速处理</h4>
              <p className="text-gray-600 text-sm">浏览器内 AI 推理，无需等待服务器</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">完全免费</h4>
              <p className="text-gray-600 text-sm">无限制使用，无隐藏费用</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© 2024 AI Image Cleaner. 所有处理均在本地完成，保护您的隐私。</p>
        </div>
      </footer>
    </main>
  );
}
