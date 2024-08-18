import AddNoteButton from './Buttons/AddNoteButton';
import CardComponent from './Card';
import { Doc } from '@/convex/_generated/dataModel';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const NotesComponent = ({ notes }: { notes: Doc<'notes'>[] }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-slate-100 sm:text-2xl md:text-3xl">Notes</h1>
        <AddNoteButton />
      </div>
      <div className="responsive-grid-cards">
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
