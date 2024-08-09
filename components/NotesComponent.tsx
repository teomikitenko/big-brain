import AddNoteButton from "./AddNoteButton";

const NotesComponent = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <h1 className="text-slate-100 font-bold text-3xl">Notes</h1>
        <AddNoteButton/>
      </div>
    </div>
  );
};

export default NotesComponent;
