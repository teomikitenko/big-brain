import { query } from "../_generated/server";

export const getTask = query({
  handler: async (ctx, args) => {
    const task = await ctx.db.query('files').collect()
    // do something with `task`
  },
});