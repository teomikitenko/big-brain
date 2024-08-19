import Modal from '@/components/Modal';
import Navigation from '@/components/Navigation';
import Provider from '@/components/Provider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: 'Big Brain | %s',
    default: 'Big Brain',
  },
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto mt-16 flex h-full min-w-full max-w-[1500px] grow">
      <div className="flex size-full px-3 pb-6 pt-10 md:px-6">
        <Provider>
          <Navigation />
          <div className="size-full px-3 sm:px-5 md:px-9">{children}</div>
          <Modal />
        </Provider>
      </div>
    </main>
  );
}
