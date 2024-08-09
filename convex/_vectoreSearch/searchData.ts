import { v } from "convex/values";
import { internal } from "../_generated/api";
import { Doc } from "../_generated/dataModel";
import { action } from "../_generated/server";
import { OpenAIEmbeddings } from "@langchain/openai";

export const vectoreSearchDocument = action({
  args: {
    searchQuery: v.string(),
  },
  handler: async (ctx, { searchQuery }) => {
    const embedModel = new OpenAIEmbeddings();
    const embedding = await embedModel.embedQuery(searchQuery);
    const results = await ctx.vectorSearch("documents", "byEmbedding", {
      vector: embedding,
      limit: 16,
    });
    const documents:Doc<'documents'>[] = await ctx.runQuery(
      internal._search.search.searchDocumentByVectores,
      { ids: results.map((result) => result._id) }
    );

    return documents;
  },
});
