import { Doc } from '@/convex/_generated/dataModel';
import AddNoteButton from './Buttons/AddNoteButton';
import CardComponent from './Card';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const NotesComponent = ({ notes }: { notes: Doc<'notes'>[] }) => {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex justify-between">
        <h1 className="text-slate-100 font-bold text-3xl">Notes</h1>
        <AddNoteButton />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {notes.map((note) => (
          <Link key={note._id} href={`notes/${note._id}`}>
            <CardComponent data={{ data: note, type: 'note' }} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NotesComponent;
