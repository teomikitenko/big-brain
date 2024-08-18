import CreateNoteForm from '../Forms/CreateNote';
import UploadDocsForm from '../Forms/UploadDocs';
import { addAndGenerateData } from '@/app/actions/addAndGenerateData';
import { addNote } from '@/app/actions/addNote';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ProviderType } from '@/types/types';

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
  return (
    <Dialog
      onOpenChange={(e) => context?.setModalData({ show: e, type: context.modalData.type })}
      open={context?.modalData.show}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-slate-200">
            {context?.modalData.type === 'uploadDoc' ? 'Upload a Document' : 'Create Note'}
          </DialogTitle>
          <DialogDescription className="text-slate-300">
            {context?.modalData.type === 'uploadDoc'
              ? 'Upload a team text document for you to search over in the future'
              : 'Create you own note to search over in the future'}
          </DialogDescription>
          {context?.modalData.type === 'uploadDoc' ? (
            <UploadDocsForm sendFile={sendFile} />
          ) : (
            <CreateNoteForm createNote={createNote} />
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ModalTemplate;
