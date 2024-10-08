import DocInteraction from '@/components/DocInteraction';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { fetchQuery } from 'convex/nextjs';
import { Metadata } from 'next/types';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Document',
};

export default async function DocPage({ params }: { params: { id: Id<'files'> | null } }) {
  const document = await fetchQuery(api._getById.getById.getByIdFile, {
    id: params.id!,
  });
  return <DocInteraction doc={document!} />;
}
