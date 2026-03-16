import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Image Cleaner - Background Remover & Watermark Eraser',
  description: 'Privacy-first AI tool to remove backgrounds and watermarks from images. Runs entirely in your browser, no uploads.',
  keywords: ['background remover', 'watermark remover', 'ai image cleaner', 'privacy', 'free tool'],
  openGraph: {
    title: 'AI Image Cleaner',
    description: 'Remove backgrounds and watermarks with AI. 100% client-side, privacy protected.',
    type: 'website',
    locale: 'en_US'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
