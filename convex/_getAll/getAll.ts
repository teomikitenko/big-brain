import { query } from "../_generated/server";

export const getAllFiles = query({
  handler: async (ctx) => {
    const files = await ctx.db.query('files').collect()
    return files
  },
});