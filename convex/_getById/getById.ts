import { query, internalQuery } from "../_generated/server";
import { v } from "convex/values";

export const getById = query({
  args: { id: v.id("files") },
  handler: async (ctx, { id }) => {
    const file = await ctx.db.get(id);
    return file;
  },
});
export const getDocumentByFileId = internalQuery({
  args: { id: v.id("files") },
  handler: async (ctx, { id }) => {
    const file = await ctx.db
      .query("documents")
      .filter((q) => q.eq(q.field("fileId"), id))
      .collect();
    return file;
  },
});
