"use server";
import { api } from "@/convex/_generated/api";
import { fetchAction } from "convex/nextjs";
import { addToDB } from "./addToDB";

export async function addAndGenerateData(formData: FormData) {
   const doc = formData.get("file") as unknown as File;
  const title = formData.get("title") as string;
  const descr = await doc.text()
  /* const resultAddToStore = await addEmbeding(doc); */ 
  const resultGenerate = await addToDB({
    title,describtion:descr
  });
  /*   const text = await doc.text()
   const store = await fetchAction(
     api._create.load.loadEmbeddings,
     { text }
   );  
   return store */   //todo need rework this actions  - all logic need separate.send file to db work. in describtion need generate descrobtion with LLM help
}
async function addEmbeding(doc: File) {
  const text = await doc.text();
  const store = await fetchAction(api._create.load.loadEmbeddings, { text });
  return store;
}
