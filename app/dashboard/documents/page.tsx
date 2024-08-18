import UploadButton from '@/components/Buttons/UploadButton';
import CardComponent from '@/components/Card';
import { api } from '@/convex/_generated/api';
import { fetchQuery } from 'convex/nextjs';
import type { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Documents',
};

const DocumentsPage = async () => {
  const files = await fetchQuery(api._getAll.getAll.getAllFiles);
  return (
    <div className="flex w-full flex-col gap-7">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-slate-100 sm:text-2xl md:text-3xl">Documents</h1>
        <UploadButton />
      </div>
      <div className="responsive-grid-cards">
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
