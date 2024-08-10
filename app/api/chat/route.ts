import { StreamingTextResponse, LangChainAdapter } from 'ai';
import { api } from '@/convex/_generated/api';
import { fetchAction } from 'convex/nextjs';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { ChatOpenAI } from '@langchain/openai';

import { createStuffDocumentsChain } from 'langchain/chains/combine_documents';
import { Document } from 'langchain/document';

import { PromptTemplate } from '@langchain/core/prompts';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const { prompt: question, id } = await request.json();

  const myId = id.replace(/[\[\]"]+/g, '');
  const { text } = await fetchAction(api._chat.chat.answer, {
    id: myId,
  });
  const llm = new ChatOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    model: 'gpt-4o-mini',
    temperature: 0,
  });
  const parcer = new StringOutputParser();

  const prompt = PromptTemplate.fromTemplate(
    'You chat bot bot and you make conversations based on the provided context and should refrain from making assumptions. If information isn’t available in context to answer, politely say you don’t have knowledge about thatThe following context is your only source of truth, only answer the question with the provided context, Dont use another context - you must use only given you context for generating answer and use need did this Necessarily  Context:{context} Question:{question}',
  );
  const ragChain = await createStuffDocumentsChain({
    llm,
    prompt: prompt,
    outputParser: parcer,
  });
  const stream = await ragChain.stream({
    question: question,
    context: [
      new Document({
        pageContent: text as string,
      }),
    ],
  });
  const aiStream = LangChainAdapter.toAIStream(stream);
  return new StreamingTextResponse(aiStream);
}
