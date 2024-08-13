import React from 'react';
import Link from 'next/link';
import * as Icons from './Icons';

const NavigationPanel = () => {
  const nav = [
    { title: 'Search', link: '/dashboard/search', icon: <Icons.SearchIcon /> },
    { title: 'Documents', link: '/dashboard/documents', icon: <Icons.DocumentIcon /> },
    { title: 'Notes', link: '/dashboard/notes', icon: <Icons.NotesIcon /> },
  ];
  return (
    <div className="sticky top-20 h-fit pl-0 pr-6 md:pr-14 pt-5 flex flex-col gap-6 ">
      {nav.map((l) => (
        <Link key={l.title} href={l.link}>
          <div className="flex gap-1 ">
            {l.icon}
            <p className="text-slate-100 hidden md:inline">{l.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavigationPanel;
