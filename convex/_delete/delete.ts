import { mutation } from '../_generated/server';
import { v } from 'convex/values';

export const deleteFile = mutation({
  args: { id: v.id('files'), documentId: v.optional(v.id('documents')) },
  handler: async (ctx, { id, documentId }) => {
    Promise.all([await ctx.db.delete(id), await ctx.db.delete(documentId!)]);
  },
});
export const deleteNote = mutation({
  args: { id: v.id('notes') },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
  },
});
