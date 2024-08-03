import { query,action,mutation, internalQuery } from "../_generated/server";
import { v } from "convex/values";

export const searchDocument = internalQuery({
  args: { id:  v.id("files") },
  handler: async (ctx, {id}) => {
    const document = await ctx.db
      .query('documents')
      .withIndex("byFileId", (i) => i.eq("fileId", id))
      .collect()
    return document[0];
  },
});