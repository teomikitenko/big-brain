import { fetchQuery } from 'convex/nextjs';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import DeleteButton from '@/components/Buttons/DeleteButton';

const NotePage = async ({ params }: { params: { id: Id<'notes'> } }) => {
  const note = await fetchQuery(api._getById.getById.getByIdNote, {
    id: params.id,
  });
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <h1 className="text-slate-100 text-3xl font-bold">{note?.title}</h1>
        <DeleteButton data={{ id: note!._id, type: 'note' }} />
      </div>
      <div className="bg-primary rounded-xl px-3 py-1 max-h-[25rem] overflow-y-scroll">
        <p className="text-slate-100 p-2">{note?.text}</p>
      </div>
    </div>
  );
};

export default NotePage;
