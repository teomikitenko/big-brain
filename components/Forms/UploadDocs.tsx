import SubmitModal from '../Buttons/SubmitModal';
import { FormEvent, useTransition } from 'react';

const UploadDocsForm = ({ sendFile }: { sendFile: (e: React.FormEvent<HTMLFormElement>) => Promise<void> }) => {
  const [isPending, startTransition] = useTransition();
  const upload = (e: FormEvent<HTMLFormElement>) => {
    startTransition(async () => {
      await sendFile(e);
    });
  };
  return (
    <form onSubmit={(e) => upload(e)} className="flex flex-col gap-2">
      <label htmlFor="title" className="text-slate-200">
        Title
      </label>
      <input type="text" name="title" className="rounded-md bg-stone-950 p-2 text-slate-100 outline-0" />
      <label className="text-slate-200" htmlFor="file">
        File
      </label>
      <input
        type="file"
        accept="text/plain"
        className="flex rounded-md bg-stone-950 p-2 text-sm text-slate-200"
        name="file"
      />
      <div>
        <SubmitModal pending={isPending} key="upload" type="create" />
      </div>
    </form>
  );
};
export default UploadDocsForm;
