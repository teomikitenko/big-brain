import SubmitModal from '../Buttons/SubmitModal';
import { FormEvent, useTransition } from 'react';

const CreateNoteForm = ({ createNote }: { createNote: (e: React.FormEvent<HTMLFormElement>) => Promise<void> }) => {
  const [isPending, startTransition] = useTransition();
  const create = (e: FormEvent<HTMLFormElement>) => {
    startTransition(async () => {
      await createNote(e);
    });
  };
  return (
    <form onSubmit={create} className="flex flex-col gap-2">
      <label className="text-slate-200" htmlFor="title">
        Title
      </label>
      <input type="text" name="title" className="rounded-md bg-stone-950 p-2 text-slate-200 outline-0 " />
      <label className="text-slate-200" htmlFor="text">
        Note text
      </label>
      <textarea
        rows={3}
        cols={4}
        className="flex rounded-md bg-stone-950 p-2 text-sm text-slate-200 outline-0 "
        name="text"
      />
      <div>
        <SubmitModal pending={isPending} key="createNote" type='create' />
      </div>
    </form>
  );
};
export default CreateNoteForm;
