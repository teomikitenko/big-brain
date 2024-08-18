import DeleteButton from '@/components/Buttons/DeleteButton';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { fetchQuery } from 'convex/nextjs';
import { Metadata } from 'next/types';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Note',
};

const NotePage = async ({ params }: { params: { id: Id<'notes'> } }) => {
  const note = await fetchQuery(api._getById.getById.getByIdNote, {
    id: params.id,
  });
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold text-slate-100 sm:text-2xl md:text-3xl">{note?.title}</h1>
        <DeleteButton data={{ id: note!._id, type: 'note' }} />
      </div>
      <div className="max-h-[25rem] overflow-y-scroll rounded-xl bg-primary px-3 py-1">
        <p className="hyphens-auto break-all p-2 text-slate-100">{note?.text}</p>
      </div>
    </div>
  );
};

export default NotePage;
