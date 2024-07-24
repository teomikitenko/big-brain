import { TextLoader } from "langchain/document_loaders/fs/text";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OpenAIEmbeddings } from "@langchain/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { pull } from "langchain/hub";
import { StringOutputParser } from "@langchain/core/output_parsers";
import {
  RunnablePassthrough,
  RunnableSequence,
} from "@langchain/core/runnables";
import { formatDocumentsAsString } from "langchain/util/document";
import { StreamingTextResponse, LangChainAdapter } from "ai";
import { ConvexVectorStore } from "@langchain/community/vectorstores/convex";
import { api } from "@/convex/_generated/api";
import { fetchAction, fetchQuery } from "convex/nextjs";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const blobFile = await request.blob();
  const doc = await blobFile.text();
  const { prompt: question } = await request.json();
/*   const ragChain: RunnableSequence<any, string> = await fetchAction(
    api._create.load.loadEmbeddings,
    { doc }
  ); */
  /* const stream = await ragChain.stream(question); */  // rework function and paste all rag logic here
 /*  const aiStream = LangChainAdapter.toAIStream(stream);
  return new StreamingTextResponse(aiStream); */
}
