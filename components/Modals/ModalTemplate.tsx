import CreateNoteForm from '../Forms/CreateNote';
import DeleteForm from '../Forms/DeleteForm';
import UploadDocsForm from '../Forms/UploadDocs';
import { addAndGenerateData } from '@/app/actions/addAndGenerateData';
import { addNote } from '@/app/actions/addNote';
import { deleteData, deleteNotes } from '@/app/actions/delete';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ProviderType } from '@/types/types';
import { twMerge } from 'tailwind-merge';

const ModalTemplate = ({ context }: { context: ProviderType | null }) => {
  const sendFile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    await addAndGenerateData(data);
    context?.setModalData({
      show: false,
      type: undefined,
    });
  };

  const createNote = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    await addNote(data);
    context?.setModalData({
      show: false,
      type: undefined,
    });
  };

  const deleteAction = async () => {
    if (context?.modalData.deleteData?.type === 'file')
      await deleteData({ id: context.modalData.deleteData.id, documentId: context.modalData.deleteData.documentId });
    if (context?.modalData.deleteData?.type === 'note') await deleteNotes(context.modalData.deleteData.id);
  };

  const formComponent =
    context?.modalData.type === 'uploadDoc' ? (
      <UploadDocsForm sendFile={sendFile} />
    ) : context?.modalData.type === 'createNote' ? (
      <CreateNoteForm createNote={createNote} />
    ) : (
      <DeleteForm deleteAction={deleteAction} setModalData={context?.setModalData} />
    );

  const titleForm =
    context?.modalData.type === 'uploadDoc'
      ? 'Upload a Document'
      : context?.modalData.type === 'createNote'
        ? 'Create Note'
        : 'You sure want do delete this file?';

  const describtionForm =
    context?.modalData.type === 'uploadDoc'
      ? 'Upload a team text document for you to search over in the future'
      : context?.modalData.type === 'createNote' && 'Create you own note to search over in the future';

  return (
    <Dialog
      onOpenChange={(e) => context?.setModalData({ show: e, type: undefined, deleteData: undefined })}
      open={context?.modalData.show}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className={twMerge('text-slate-200', context?.modalData.deleteData && 'text-center')}>
            {titleForm}
          </DialogTitle>
          <DialogDescription className="text-slate-300">{describtionForm}</DialogDescription>
          {formComponent}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ModalTemplate;
