'use node'
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
import { fetchAction, fetchQuery, fetchMutation } from "convex/nextjs";
import { api, internal } from "../_generated/api";
import { Doc,Id } from "../_generated/dataModel";


export const answer = action({
  args: {
    id:v.id('files')
  },
  handler: async (ctx, {id }) => {
 
    const searchResult: Doc<"documents"> = await ctx.runQuery(
      internal._search.search.searchDocument,
      { id: id}
    ); 
    return searchResult;
  },
});
