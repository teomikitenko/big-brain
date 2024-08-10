import { Button } from '../ui/button';
const CreateNoteForm = ({ createNote }: { createNote: (e: React.FormEvent<HTMLFormElement>) => Promise<void> }) => {
  return (
    <form onSubmit={(e) => createNote(e)} className="flex flex-col gap-2">
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
        <Button type="submit" size="custom" variant="secondary">
          Create
        </Button>
      </div>
    </form>
  );
};
export default CreateNoteForm;
