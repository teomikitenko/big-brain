import { query } from '../_generated/server';

export const getAllFiles = query({
  handler: async (ctx) => {
    const files = await ctx.db.query('files').collect();
    return files;
  },
});

export const getAllNotes = query({
  handler: async (ctx) => {
    const notes = await ctx.db.query('notes').collect();
    return notes;
  },
});
