import { mutation } from '../_generated/server';
import { v } from 'convex/values';
import { internalMutation } from '../_generated/server';

export const addCard = mutation({
  args: { title: v.string(), describtion: v.string(), text: v.string() },
  handler: async (ctx, { title, describtion, text }) => {
    const taskId = await ctx.db.insert('files', { title, describtion, text });
    return taskId;
  },
});
export const addEmbeddings = internalMutation({
  args: {
    embedding: v.array(v.number()),
    fileId: v.id('files'),
    text: v.string(),
  },
  handler: async (ctx, { embedding, fileId, text }) => {
    const writeDoc = await ctx.db.insert('documents', { embedding, fileId, text });
    await ctx.db.patch(fileId, { documentId: writeDoc });
  },
});
export const addNoteEmbeddings = internalMutation({
  args: {
    embedding: v.array(v.number()),
    text: v.string(),
    title: v.string(),
  },
  handler: async (ctx, { embedding, title, text }) => {
    await ctx.db.insert('notes', { embedding, title, text });
  },
});
