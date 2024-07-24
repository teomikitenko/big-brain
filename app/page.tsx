import { TextLoader } from "langchain/document_loaders/fs/text";
import LogDataComponent from "@/components/LogDataComponent";
export  default async function Home() {
/*   const loader  = new TextLoader(
    'ai-app/public/testing-document.txt'
  )
  const docs = await loader.load(); */
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
  {/*  <LogDataComponent /> */}
  <p>Landing Page</p>
    </main>
  );
}
