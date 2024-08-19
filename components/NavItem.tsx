'use client';

import type { NavItemType } from '@/types/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const NavItem = ({ item }: { item: NavItemType }) => {
  const path = usePathname();
  return (
    <Link href={item.link}>
      <div className={twMerge('flex gap-1 text-slate-200', path === item.link && 'text-emerald-600')}>
        {item.icon}
        <p className="hidden md:inline">{item.title}</p>
      </div>
    </Link>
  );
};

export default NavItem;
