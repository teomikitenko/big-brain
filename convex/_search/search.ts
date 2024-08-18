import { internalQuery } from '../_generated/server';
import { SearchResultType } from '@/types/types';
import { v } from 'convex/values';

export const searchDocument = internalQuery({
  args: { id: v.id('files') },
  handler: async (ctx, { id }) => {
    const document = await ctx.db
      .query('documents')
      .filter((q) => q.eq(q.field('fileId'), id))
      .unique();
    return document!;
  },
});

export const searchDocumentByVectores = internalQuery({
  args: { documentsIds: v.array(v.id('documents')), notesIds: v.array(v.id('notes')) },
  handler: async (ctx, { documentsIds, notesIds }) => {
    let documentArray: SearchResultType['documents'] = [];
    let notesArray: SearchResultType['notes'] = [];
    await Promise.all(
      documentsIds.map(async (id) => {
        const doc = await ctx.db.get(id);

        if (doc) documentArray?.push({ data: doc, type: 'documents' });
      }),
    );
    await Promise.all(
      notesIds.map(async (id) => {
        const note = await ctx.db.get(id);
        if (note) notesArray?.push({ data: note, type: 'note' });
      }),
    );
    return { documents: documentArray, notes: notesArray };
  },
});
