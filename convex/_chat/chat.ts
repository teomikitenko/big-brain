import { v } from "convex/values";
import { ChatOpenAI } from "@langchain/openai";
import { OpenAIEmbeddings } from "@langchain/openai";
import { ConvexVectorStore } from "@langchain/community/vectorstores/convex";
import { action } from "../_generated/server";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import {
  RunnableSequence,
  RunnablePassthrough,
} from "@langchain/core/runnables";
import { pull } from "langchain/hub";
import { formatDocumentsAsString } from "langchain/util/document";
import { fetchAction, fetchQuery } from "convex/nextjs";
import { api } from "../_generated/api";
import { Doc } from "../_generated/dataModel";



export const answer = action({
  args: {
    question: v.string(),
  },
  handler: async (ctx, { question }) => {
    const embeddings = new OpenAIEmbeddings()
    const res = await ctx.vectorSearch('documents','byEmbedding',{
    vector: await embeddings.embedQuery("Hello world")
    })
    const searchResult:Doc<'documents'> = await fetchQuery(api._search.search.searchDocument,{id:res[0]._id})
    return searchResult  // continue work
  /*   const vectorStore = new ConvexVectorStore(new OpenAIEmbeddings(), { ctx });
    const llm = new ChatOpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      model: "gpt-3.5-turbo",
      temperature: 0,
    });
    const parcer = new StringOutputParser();
    const retriever = vectorStore.asRetriever();
    const prompt = await pull<ChatPromptTemplate>("rlm/rag-prompt");
    const ragChain = RunnableSequence.from([
      {
        context: retriever.pipe(formatDocumentsAsString) ,
        question: new RunnablePassthrough(),
      },
      prompt,
      llm,
      parcer,
    ]);
    const stream = await ragChain.stream(question);
    return stream; */
  },
});
