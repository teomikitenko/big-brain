'use server';

import { generateAndAddToDB } from './addToDB';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { fetchAction } from 'convex/nextjs';
import { revalidatePath } from 'next/cache';

export async function addAndGenerateData(formData: FormData) {
  const doc = formData.get('file') as unknown as File;
  const title = formData.get('title') as string;
  const text = await doc.text();
  const { describtion, id } = await generateAndAddToDB({
    title,
    text,
  });
  const vectoreStore = await addEmbeding(text, id);
  const resultStore = { store: vectoreStore, title, text, describtion };
  return resultStore;
}
export async function addEmbeding(text: string, id: Id<'files'>) {
  await fetchAction(api._create.load.loadEmbeddings, {
    text,
    id,
  });
  revalidatePath('/dashboard/documents');
}
