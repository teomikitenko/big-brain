import { v } from 'convex/values';
import { action } from '../_generated/server';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { OpenAIEmbeddings } from '@langchain/openai';
import { internal } from '../_generated/api';

export const loadEmbeddings = action({
  args: {
    text: v.string(),
    id: v.id('files'),
  },
  handler: async (ctx, { text, id }) => {
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });
    const splitText = await textSplitter.splitText(text);
    const embedModel = new OpenAIEmbeddings();
    const embedding = await embedModel.embedQuery(splitText[0]);
    await ctx.runMutation(internal._add.add.addEmbeddings, {
      embedding,
      fileId: id,
      text,
    });
  },
});
export const loadNotes = action({
  args: { text: v.string(), title: v.string() },
  handler: async (ctx, { text, title }) => {
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });
    const splitText = await textSplitter.splitText(text);
    const embedModel = new OpenAIEmbeddings();
    const embedding = await embedModel.embedQuery(splitText[0]);
    await ctx.runMutation(internal._add.add.addNoteEmbeddings, {
      embedding,
      text,
      title,
    });
  },
});
