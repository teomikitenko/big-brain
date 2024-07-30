
import { StreamingTextResponse, LangChainAdapter } from "ai";
import { ConvexVectorStore } from "@langchain/community/vectorstores/convex";
import { api } from "@/convex/_generated/api";
import { fetchAction, fetchQuery } from "convex/nextjs";
import { NextRequest, NextResponse } from "next/server";
import { OpenAIEmbeddings } from "@langchain/openai";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const { prompt: question } = await request.json();
  const res = await fetchAction(api._chat.chat.answer,{question})
  console.log(res)  //continue work with with fetch action
/*   const stream = await fetchAction(api._chat.chat.answer,{question})
  const aiStream = LangChainAdapter.toAIStream(stream);
  return new StreamingTextResponse(aiStream); */
/*     

   */
return new Response('route handler chat', {
  status: 200})
}
