'use client';

import { DownloadIcon } from '../Icons';
import { ModalContext } from '../Provider';
import { Button } from '../ui/button';
import { useContext } from 'react';

const UploadButton = () => {
  const context = useContext(ModalContext);
  return (
    <Button
      className="flex w-fit gap-2 bg-transparent md:bg-secondary"
      variant="secondary"
      onClick={() =>
        context?.setModalData({
          show: true,
          type: 'uploadDoc',
        })
      }
    >
      <DownloadIcon />
      <p className="hidden md:inline">Upload Document</p>
    </Button>
  );
};

export default UploadButton;
