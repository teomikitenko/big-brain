import { fetchQuery } from 'convex/nextjs';
import { api } from '@/convex/_generated/api';
import UploadButton from '@/components/Buttons/UploadButton';
import Link from 'next/link';
import CardComponent from '@/components/Card';
const DocumentsPage = async () => {
  const files = await fetchQuery(api._getAll.getAll.getAllFiles);
  return (
    <div className="w-full flex flex-col gap-7">
      <div className="flex justify-between items-center">
        <h1 className="text-slate-100 font-bold text-xl sm:text-2xl md:text-3xl">Documents</h1>
        <UploadButton />
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-2 gap-3">
        {files.map((file) => (
          <Link key={file._id} href={`documents/${file._id}`}>
            <CardComponent data={{ data: file, type: 'files' }} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DocumentsPage;
