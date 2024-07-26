import { v } from "convex/values";
import { internalAction, action, query } from "../_generated/server";
import { Document } from "@langchain/core/documents";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { CacheBackedEmbeddings } from "langchain/embeddings/cache_backed";
import { ConvexKVStore } from "@langchain/community/storage/convex";
import { ConvexVectorStore } from "@langchain/community/vectorstores/convex";
import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import {
  RunnableSequence,
  RunnablePassthrough,
} from "@langchain/core/runnables";
import { pull } from "langchain/hub";
import { formatDocumentsAsString } from "langchain/util/document";


export const loadEmbeddings = action({
  args: {
    text: v.string(),
  },
  handler: async (ctx,{text}) => {
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
     const vectorStore = await ConvexVectorStore.fromDocuments(
      splitDocs,
      embeddings,
      { ctx }
    );
   
  /*    const llm = new ChatOpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      model: "gpt-3.5-turbo",
      temperature: 0,
    });
    const parcer = new StringOutputParser();
    const retriever = vectorStore.asRetriever();
    const prompt = await pull<ChatPromptTemplate>("rlm/rag-prompt");

    const ragChain = RunnableSequence.from([
      {
        context: retriever.pipe(formatDocumentsAsString),
        question: new RunnablePassthrough(),
      },
      prompt,
      llm,
      parcer,
    ]); */ 
    return vectorStore;
  },
});


