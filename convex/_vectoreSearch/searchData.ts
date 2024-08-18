import { internal } from '../_generated/api';
import { action } from '../_generated/server';
import type { SearchResultType } from '@/types/types';
import { OpenAIEmbeddings } from '@langchain/openai';
import { v } from 'convex/values';

export const vectoreSearchDocument = action({
  args: {
    searchQuery: v.string(),
  },
  handler: async (ctx, { searchQuery }) => {
    const embedModel = new OpenAIEmbeddings();
    const embedding = await embedModel.embedQuery(searchQuery);
    const documentResults = await ctx.vectorSearch('documents', 'byEmbedding', {
      vector: embedding,
      limit: 16,
    });
    const notesResults = await ctx.vectorSearch('notes', 'byNotes', {
      vector: embedding,
      limit: 16,
    });
    const filteredDocuments = documentResults.filter((result) => result._score >= 0.8);
    const filteredNotes = notesResults.filter((result) => result._score >= 0.8);
    const results: SearchResultType = await ctx.runQuery(internal._search.search.searchDocumentByVectores, {
      documentsIds: filteredDocuments?.map((result) => result._id),
      notesIds: filteredNotes?.map((result) => result._id),
    });

    return results;
  },
});
