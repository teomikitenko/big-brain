import { v } from 'convex/values';
import { action } from '../_generated/server';
import { internal } from '../_generated/api';
import { Doc } from '../_generated/dataModel';

export const answer = action({
  args: {
    id: v.id('files'),
  },
  handler: async (ctx, { id }) => {
    const searchResult: Doc<'documents'> = await ctx.runQuery(internal._search.search.searchDocument, { id });
    return searchResult;
  },
});
