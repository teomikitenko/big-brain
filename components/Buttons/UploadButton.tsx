'use client';
import { Button } from '../ui/button';
import { useContext } from 'react';
import { ModalContext } from '../Provider';
import { DownloadIcon } from '../Icons';

const UploadButton = () => {
  const context = useContext(ModalContext);
  return (
    <Button
      className="flex gap-2 w-fit bg-transparent md:bg-secondary"
      variant="secondary"
      onClick={() =>
        context?.setModalData({
          show: true,
          type: 'uploadDoc',
        })
      }
    >
      <DownloadIcon />
      <p className='hidden md:inline'>Upload Document</p>
    </Button>
  );
};

export default UploadButton;
