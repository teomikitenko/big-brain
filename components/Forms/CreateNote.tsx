import { Button } from "../ui/button";
const CreateNoteForm = ({
  createNote,
}: {
  createNote: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}) => {
  return (
    <form onSubmit={(e) => createNote(e)} className="flex flex-col gap-2">
      <label htmlFor="title">Title</label>
      <input type="text" name="title" className="p-1 border rounded-md" />
      <label htmlFor="text">Note text</label>
      <textarea
        rows={3}
        cols={4}
        className="flex border rounded-md p-1 text-sm"
        name="text"
      />
      <div>
        <Button type="submit" size="custom" variant="default">
          Create
        </Button>
      </div>
    </form>
  );
};
export default CreateNoteForm;
