import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Big Brain',
    default: 'Big Brain',
  },
  icons: '/icon.png',
  openGraph: {
    title: 'Big brain',
    url: 'https://big-brain-ecru.vercel.app/',
    siteName: 'Big brain',
    images: [
      {
        url: 'hhttps://big-brain-ecru.vercel.app/api/og',
        width: '500',
        height: '500',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={`${[inter.className, 'flex', 'flex-col', 'min-h-screen min-w-[350px] bg-stone-950'].join(' ')}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
