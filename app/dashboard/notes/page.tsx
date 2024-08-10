import React from 'react';
import NotesComponent from '@/components/NotesComponent';
import { fetchQuery } from 'convex/nextjs';
import { api } from '@/convex/_generated/api';

const Notes = async () => {
  const allNotes = await fetchQuery(api._getAll.getAll.getAllNotes);
  return <NotesComponent notes={allNotes} />;
};

export default Notes;
