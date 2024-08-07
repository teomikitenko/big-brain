"use client";
import { Button } from "./ui/button";
import { useContext } from "react";
import { ModalContext } from "./Provider";
import { DownloadIcon } from "./Icons";

const UploadButton = () => {
  const context = useContext(ModalContext);
  return (
    <Button
      className="flex gap-2"
      variant="secondary"
      onClick={() => context?.setShowModal(true)}
    >
      <DownloadIcon />
      <p>Upload Document</p>
    </Button>
  );
};

export default UploadButton;
