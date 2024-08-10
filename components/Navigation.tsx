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
    <div className="h-full pl-0 pr-14 flex flex-col gap-6 ">
      {nav.map((l) => (
        <Link key={l.title} href={l.link}>
          <div className="flex gap-1">
            {l.icon}
            <p className="text-slate-100">{l.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavigationPanel;
