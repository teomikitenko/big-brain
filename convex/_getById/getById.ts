import { query } from "../_generated/server";
import { v } from "convex/values";

export const getById = query({
  args: { id: v.id("files") },
  handler: async (ctx, { id }) => {
    const file = await ctx.db.get(id);
    return file;
  },
});
