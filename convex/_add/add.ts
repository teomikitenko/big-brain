import { mutation } from "../_generated/server";
import { v } from "convex/values";

export const addCard = mutation({
  args: { title:v.string(),describtion: v.string(),text:v.string() },
  handler: async (ctx, {title,describtion,text}) => {
    const taskId = await ctx.db.insert('files', {title,describtion,text });
    // do something with `taskId`
  },
});