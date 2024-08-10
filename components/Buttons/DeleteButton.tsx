'use client';
import { Button } from '../ui/button';
import { DeleteIcon } from '../Icons';
import { deleteData, deleteNotes } from '@/app/actions/delete';
import type { FileType, NoteType } from '@/types/types';
const DeleteButton = ({ data }: { data: FileType | NoteType }) => {
  const defineTypeHandler = async () => {
    if (data.type === 'file') await deleteData({ id: data.id, documentId: data.documentId });
    else await deleteNotes(data.id);
  };
  return (
    <Button onClick={defineTypeHandler} size="sm" variant="destructive" className="flex gap-2">
      <DeleteIcon />
      <p>Delete</p>
    </Button>
  );
};

export default DeleteButton;
