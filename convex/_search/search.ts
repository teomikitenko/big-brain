import { internalQuery } from "../_generated/server";
import { v } from "convex/values";

export const searchDocument = internalQuery({
  args: { id: v.id('files') },
  handler: async (ctx, { id }) => {
    const document = await ctx.db
      .query("documents")
      .filter((q) => q.eq(q.field("fileId"), id))
      .unique();
    return document!;
  },
});
