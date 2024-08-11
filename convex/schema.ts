import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  documents: defineTable({
    embedding: v.array(v.number()),
    fileId: v.id('files'),
    text: v.string(),
  }).vectorIndex('byEmbedding', {
    vectorField: 'embedding',
    dimensions: 1536,
  }),
  files: defineTable({
    title: v.string(),
    describtion: v.string(),
    text: v.string(),
    documentId: v.union(v.id('documents'),v.any()),
  }).index('by_title', ['title']),
  cache: defineTable({
    key: v.string(),
    value: v.any(),
  }).index('byKey', ['key']),
  notes: defineTable({
    embedding: v.array(v.number()),
    title: v.string(),
    text: v.string(),
  }).vectorIndex('byNotes', {
    vectorField: 'embedding',
    dimensions: 1536,
  }),
});
