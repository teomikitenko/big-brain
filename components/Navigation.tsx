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
    <div className="sticky top-20 flex h-fit flex-col gap-6 pl-0 pr-6 pt-5 md:pr-14 ">
      {nav.map((l) => (
        <Link key={l.title} href={l.link}>
          <div className="flex gap-1 ">
            {l.icon}
            <p className="hidden text-slate-100 md:inline">{l.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavigationPanel;
