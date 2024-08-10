'use server';
import { api } from '@/convex/_generated/api';
import { fetchMutation } from 'convex/nextjs';
import { Id } from '@/convex/_generated/dataModel';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { FileType } from '@/types/types';

export async function deleteData(deleteObj: Omit<FileType, 'type'>) {
  await fetchMutation(api._delete.delete.deleteFile, { id: deleteObj.id, documentId: deleteObj.documentId });
  revalidatePath('/dashboard/documents');
  redirect('/dashboard/documents');
}

export async function deleteNotes(id: Id<'notes'>) {
  await fetchMutation(api._delete.delete.deleteNote, { id });
  revalidatePath('/dashboard/notes');
  redirect('/dashboard/notes');
}
