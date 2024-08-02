import { v } from "convex/values";
import { action } from "../_generated/server";
import { Document } from "@langchain/core/documents";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { CacheBackedEmbeddings } from "langchain/embeddings/cache_backed";
import { ConvexKVStore } from "@langchain/community/storage/convex";
import { ConvexVectorStore } from "@langchain/community/vectorstores/convex";
import { OpenAIEmbeddings } from "@langchain/openai";

export const loadEmbeddings = action({
  args: {
    text: v.string(),
  },
  handler: async (ctx, { text }) => {
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });
    const splitDocs = await textSplitter.splitDocuments([
      new Document({ pageContent: text }),
    ]);

    const embeddings = new CacheBackedEmbeddings({
      underlyingEmbeddings: new OpenAIEmbeddings(),
      documentEmbeddingStore: new ConvexKVStore({ ctx }),
    });
    await ConvexVectorStore.fromDocuments(splitDocs, embeddings, { ctx }); // think about logic with embedding id
  },
});
