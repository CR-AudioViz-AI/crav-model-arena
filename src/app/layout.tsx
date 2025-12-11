import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: { default: 'Model Arena | CR AudioViz AI', template: '%s | Model Arena' },
  description: 'Battle your AI models, earn credits, and climb the leaderboard.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-zinc-950 text-white antialiased">{children}</body>
    </html>
  );
}
