'use server'
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import type { FileCard } from "@/types/types";
 

export async function addToDB(fileCard:FileCard){
await fetchMutation(api._add.add.addCard,{title:fileCard.title,describtion:fileCard.describtion})
}