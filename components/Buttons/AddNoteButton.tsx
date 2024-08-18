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
      className="flex w-fit gap-2 bg-transparent hover:bg-transparent md:bg-secondary md:hover:bg-secondary/80 "
    >
      <AddIcon />
      <p className="hidden md:inline">Create Note</p>
    </Button>
  );
};

export default AddNoteButton;
