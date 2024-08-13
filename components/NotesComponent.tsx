import { Doc } from '@/convex/_generated/dataModel';
import AddNoteButton from './Buttons/AddNoteButton';
import CardComponent from './Card';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const NotesComponent = ({ notes }: { notes: Doc<'notes'>[] }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <h1 className="text-slate-100 font-bold text-xl sm:text-2xl md:text-3xl">Notes</h1>
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
