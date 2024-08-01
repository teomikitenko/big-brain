import { StreamingTextResponse, LangChainAdapter } from "ai";
import { api } from "@/convex/_generated/api";
import { fetchAction } from "convex/nextjs";
import {
  RunnableSequence,
  RunnablePassthrough,
} from "@langchain/core/runnables";
import { formatDocumentsAsString } from "langchain/util/document";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { pull } from "langchain/hub";
import { NextResponse } from "next/server";
import { CharacterTextSplitter } from "langchain/text_splitter";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const { prompt: question } = await request.json();
  const { embedding } = await fetchAction(api._chat.chat.answer, { question });
  const llm = new ChatOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    model: "gpt-3.5-turbo",
    temperature: 0,
  });
  const parcer = new StringOutputParser();
  const prompt = await pull<ChatPromptTemplate>("rlm/rag-prompt");
  const ragChain = RunnableSequence.from([
    {
      context: () => embedding,
      question: new RunnablePassthrough(),
    },
    prompt,
    llm,
    parcer,
  ]);
  const stream = await ragChain.stream(question);
  const aiStream = LangChainAdapter.toAIStream(stream);
  return new StreamingTextResponse(aiStream);
}
