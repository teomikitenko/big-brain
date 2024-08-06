"use server";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatOpenAI } from "@langchain/openai";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import type { FileCard } from "@/types/types";

export async function generateAndAddToDB(fileCard: FileCard) {
  const model = new ChatOpenAI({ model: "gpt-3.5-turbo" });
  const parser = new StringOutputParser();
  const messages = [
    new SystemMessage(
      "Need short and accurate text,text might be from 10 to 15 words, on topic - if i read this following text what i learn?This text might start from words - Learn"
    ),
    new HumanMessage(fileCard.text),
  ];
  const chain = model.pipe(parser);
  const describtion = await chain.invoke(messages);
  const id = await fetchMutation(api._add.add.addCard, {
    title: fileCard.title,
    describtion,
    text:fileCard.text
  });
  return {describtion,id}
}
