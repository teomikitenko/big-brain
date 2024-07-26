"use server";
import { api } from "@/convex/_generated/api";
import { fetchAction } from "convex/nextjs";
import { generateAndAddToDB } from "./addToDB";


export async function addAndGenerateData(formData: FormData) {
  const doc = formData.get("file") as unknown as File;
  const title = formData.get("title") as string;
  const text = await doc.text();
  const vectoreStore = await addEmbeding(text);
  const {describtion} = await generateAndAddToDB({
    title,
    text,
  });
  const resultStore = {store: vectoreStore, title,text,describtion};
  return resultStore;
}
export async function addEmbeding(text: string) {
  const store = await fetchAction(api._create.load.loadEmbeddings, { text });
  return store;
}
