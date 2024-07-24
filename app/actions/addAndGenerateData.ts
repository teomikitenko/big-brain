"use server";
import { api } from "@/convex/_generated/api";
import { fetchAction } from "convex/nextjs";

export async function addAndGenerateData(formData: FormData) {
  const doc = formData.get("file") as unknown as File;
  const title = formData.get("title") as string;
  const resultAddToStore = await addEmbeding(doc);
  const resultGenerate = await generateDescription(doc);
  /*   const text = await doc.text()
   const store = await fetchAction(
     api._create.load.loadEmbeddings,
     { text }
   );  
   return store */
}

async function generateDescription(doc: File) {
  console.log("its message from generate action");
  console.log(doc);
}
async function addEmbeding(doc: File) {
  const text = await doc.text();
  const store = await fetchAction(api._create.load.loadEmbeddings, { text });
  return store;
}
