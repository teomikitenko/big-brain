"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { useContext } from "react";
import { ModalContext } from "./Provider";
import { addAndGenerateData } from "@/app/actions/addAndGenerateData";

const Modal = () => {
  const context = useContext(ModalContext);
  const sendFile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    await addAndGenerateData(data);
    context?.setShowModal(false);
  };
  return (
    <Dialog onOpenChange={context?.setShowModal} open={context?.showModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload a Document</DialogTitle>
          <DialogDescription>
            Upload a team document for you to search over in the future
          </DialogDescription>
          <form onSubmit={(e) => sendFile(e)} className="flex flex-col gap-2">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" className="p-1 border rounded-md" />
            <label htmlFor="file">File</label>
            <input
              type="file"
              className="flex border rounded-md p-1 text-sm"
              name="file"
            />
            <div>
              <Button type="submit" size="custom" variant="default">
                Upload
              </Button>
            </div>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
