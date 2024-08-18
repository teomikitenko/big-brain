import { Note, Document } from './Icons';
import type { NotesType, DocsType } from '@/types/types';
import Link from 'next/link';
import React from 'react';

const SearchCard = ({ searchResult }: { searchResult: DocsType | NotesType }) => {
  const path =
    searchResult.type === 'documents' ? `documents/${searchResult.data.fileId}` : `notes/${searchResult.data._id}`;
  return (
    <Link href={`/dashboard/${path}`}>
      <div className="flex w-full flex-col gap-2 bg-[#1d293b] p-3 text-slate-100">
        <div className="flex items-center gap-1">
          {searchResult.type === 'documents' ? (
            <>
              <Document />
              <h1>Document</h1>
            </>
          ) : (
            <>
              <Note />
              <h1>Note</h1>
            </>
          )}
        </div>
        <p className="line-clamp-2">{searchResult.data.text}</p>
      </div>
    </Link>
  );
};

export default SearchCard;
