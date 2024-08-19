'use client';

import { DeleteIcon } from '../Icons';
import { Button } from '../ui/button';
import { useContext } from 'react';

import { ModalContext } from '../Provider';

import type { FileType, NoteType } from '@/types/types';

const DeleteButton = ({ data }: { data: FileType | NoteType }) => {
  const context = useContext(ModalContext);
  return (
    <Button
      onClick={() =>
        context?.setModalData({
          show: true,
          type: data.type === 'file'? 'deleteDoc':'deleteNote',
          deleteData:data
        })
      }
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
