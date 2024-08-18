import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="fixed z-10 w-full bg-primary px-8 py-4 ">
      <div className="flex size-full">
        <div className="flex gap-4">
          <Link className="flex gap-4" href={'/'}>
            <Image src={'/logo.png'} width={40} height={40} alt="logo" />
            <div className="flex items-center justify-center">
              <h2 className="text-xl font-medium text-slate-50 ">BIGBRAIN</h2>
            </div>
          </Link>
          <Link className="flex items-center justify-center" href={'/dashboard/documents'}>
            <p className="text-slate-50">Dashboard</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
