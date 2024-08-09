'use server'
import { api } from "@/convex/_generated/api";
import { fetchAction } from "convex/nextjs";

export async function addNote(formData:FormData) {
   const title = formData.get('title')
   const text = formData.get('text')
   await fetchAction(api._create.load.loadNotes,{
    title: title as string,
    text : text as string 
   })
  }