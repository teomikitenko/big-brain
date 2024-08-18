import NotesComponent from '@/components/NotesComponent';
import { api } from '@/convex/_generated/api';
import { fetchQuery } from 'convex/nextjs';
import { Metadata } from 'next/types';
import React from 'react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Notes',
};

const Notes = async () => {
  const allNotes = await fetchQuery(api._getAll.getAll.getAllNotes);
  return <NotesComponent notes={allNotes} />;
};

export default Notes;
