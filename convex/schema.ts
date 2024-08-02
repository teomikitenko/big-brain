import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  documents: defineTable({
    embedding: v.array(v.number()),
    text: v.string(),
    metadata: v.any(),
  }).vectorIndex("byEmbedding", {
    vectorField: "embedding",
    dimensions: 1536,
  }),
  files: defineTable({
    title: v.string(),
    describtion: v.string(),
    text: v.string(),
  }).index("by_title", ["title"]),
  cache: defineTable({
    key: v.string(),
    value: v.any(),
  }).index("byKey", ["key"]),
});
