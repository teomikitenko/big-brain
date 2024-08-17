import { FormEvent, useTransition } from 'react';
import SubmitModal from '../Buttons/SubmitModal';
const CreateNoteForm = ({ createNote }: { createNote: (e: React.FormEvent<HTMLFormElement>) => Promise<void> }) => {
  const [isPending, startTransition] = useTransition();
  const create = (e:FormEvent<HTMLFormElement>)=>{
   startTransition(
    async()=>{
      await createNote(e)
    }
   )
  }
  return (
    <form onSubmit={create} className="flex flex-col gap-2">
      <label className="text-slate-200" htmlFor="title">
        Title
      </label>
      <input type="text" name="title" className="p-2 outline-0 rounded-md bg-stone-950 text-slate-200 " />
      <label className="text-slate-200" htmlFor="text">
        Note text
      </label>
      <textarea
        rows={3}
        cols={4}
        className="flex outline-0 rounded-md p-2 text-sm bg-stone-950 text-slate-200 "
        name="text"
      />
      <div>
        <SubmitModal pending ={isPending} key='createNote'/>
      </div>
    </form>
  );
};
export default CreateNoteForm;
