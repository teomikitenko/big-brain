'use client'
import { Button } from "./ui/button";
import { useContext } from "react";
import { ModalContext } from "./Provider";

const UploadButton = () => {
  const context = useContext(ModalContext);
  return (
    <Button onClick={() => context?.setShowModal(true)}>Upload Document</Button>
  );
};

export default UploadButton;
