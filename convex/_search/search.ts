import { query,action,mutation, internalQuery } from "../_generated/server";
import { v } from "convex/values";

export const searchDocument = internalQuery({
  args: { id: v.string() },
  handler: async (ctx, args) => {
    const document = await ctx.db
      .query('documents')
      .filter((q) => q.eq(q.field('_id'), args.id))
      .collect()
    return document[0];
  },
});