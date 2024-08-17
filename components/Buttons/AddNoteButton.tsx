'use client';
import { Button } from '../ui/button';
import { AddIcon } from '../Icons';
import { ModalContext } from '../Provider';
import { useContext } from 'react';

const AddNoteButton = () => {
  const context = useContext(ModalContext);
  return (
    <Button
      onClick={() =>
        context?.setModalData({
          show: true,
          type: 'createNote',
        })
      }
      size="sm"
      variant="secondary"
      className="flex gap-2 w-fit bg-transparent md:bg-secondary hover:bg-transparent md:hover:bg-secondary/80 "
    >
      <AddIcon />
      <p className="hidden md:inline">Create Note</p>
    </Button>
  );
};

export default AddNoteButton;
