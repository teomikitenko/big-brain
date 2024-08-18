'use client';

import { DeleteIcon } from '../Icons';
import { Button } from '../ui/button';
import { deleteData, deleteNotes } from '@/app/actions/delete';
import type { FileType, NoteType } from '@/types/types';

const DeleteButton = ({ data }: { data: FileType | NoteType }) => {
  const defineTypeHandler = async () => {
    if (data.type === 'file') await deleteData({ id: data.id, documentId: data.documentId });
    else await deleteNotes(data.id);
  };
  return (
    <Button
      onClick={defineTypeHandler}
      size="sm"
      variant="destructive"
      className="flex w-fit gap-2 bg-transparent md:bg-destructive"
    >
      <DeleteIcon />
      <p className="hidden md:inline">Delete</p>
    </Button>
  );
};

export default DeleteButton;
