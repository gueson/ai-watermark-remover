'use client';

import { useState, useCallback, useEffect } from 'react';
import ImageUploader from '@/components/ImageUploader';
import ProcessingCanvas from '@/components/ProcessingCanvas';

export default function Home() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [mode, setMode] = useState<'background' | 'watermark'>('background');
  const [apiKey, setApiKey] = useState<string>('');

  useEffect(() => {
    const stored = localStorage.getItem('rembg_api_key') || '';
    setApiKey(stored);
  }, []);

  const handleApiKeyChange = (key: string) => {
    setApiKey(key);
    localStorage.setItem('rembg_api_key', key);
  };

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

      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
          高质量去背景，支持复杂图片
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          集成 remove.bg API，精准识别前景与背景。
        </p>
        <div className="inline-block bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-800 max-w-2xl">
          <strong>配置 API Key：</strong> 获取免费额度后粘贴下方（保存在本地）。
          <div className="mt-2">
            <input
              type="text"
              placeholder="输入 remove.bg API Key"
              value={apiKey}
              onChange={(e) => handleApiKeyChange(e.target.value)}
              className="w-full px-3 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>
      </section>

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
            apiKey={apiKey}
          />
        )}
      </section>

      <section className="bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 py-16">
          <h3 className="text-2xl font-bold text-center mb-12">为什么选择我们</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">AI 级效果</h4>
              <p className="text-gray-600 text-sm">remove.bg 专业模型，边缘精细</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">隐私可选</h4>
              <p className="text-gray-600 text-sm">无 API Key 时使用前端算法</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">灵活付费</h4>
              <p className="text-gray-600 text-sm">remove.bg 提供免费额度</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© 2024 AI Image Cleaner. 使用 remove.bg API 提升效果。</p>
        </div>
      </footer>
    </main>
  );
}
