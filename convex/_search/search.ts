import { internalQuery } from "../_generated/server";
import { v } from "convex/values";
import { Doc } from "../_generated/dataModel";

export const searchDocument = internalQuery({
  args: { id: v.id("files") },
  handler: async (ctx, { id }) => {
    const document = await ctx.db
      .query("documents")
      .filter((q) => q.eq(q.field("fileId"), id))
      .unique();
    return document!;
  },
});

export const searchDocumentByVectores = internalQuery({
  args: { ids: v.array(v.id("documents")) },
  handler: async (ctx, { ids }) => {
    let resultArray: Doc<"documents">[] = [];
    await Promise.all(ids.map(async (id) => {
      const doc = await ctx.db.get(id);
      if(doc) resultArray.push(doc);
    }));
    return resultArray;
  },
});
