import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Provider from '@/components/Provider';
import Modal from '@/components/Modal';
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
    <main className="min-w-full h-full flex grow mt-16 max-w-[1500px] mx-auto">
      <div className="h-full w-full flex px-3 md:px-6 pt-10">
        <Provider>
          <Navigation />
          <div className="h-full px-3 sm:px-5 md:px-9 w-full">{children}</div>
          <Modal />
        </Provider>
      </div>
    </main>
  );
}
