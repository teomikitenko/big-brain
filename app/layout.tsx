import './globals.css';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Big Brain',
    default: 'Big Brain',
  },
  metadataBase: new URL('https://big-brain-ecru.vercel.app'),
  icons: '/logo.png',
  openGraph: {
    title: 'Big Brain',
    siteName: 'Big brain',
    description: 'BigBrain acts as your team`s second brain, storing all your docs and allowing easy vector search',
  },
  twitter: {
    card: 'summary',
    title: 'Big brain',
    description: 'BigBrain acts as your team`s second brain, storing all your docs and allowing easy vector search',
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
