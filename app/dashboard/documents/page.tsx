"use client";
import React, { useContext, useEffect, useState } from "react";
import { useChat, useCompletion } from "ai/react";
import { addEmbeding } from "@/app/actions/loadEmbeddings";
import { ModalContext } from "@/components/Provider";
export const dynamic = "force-dynamic";

const DocumentsPage = () => {
  const [file, setfile] = useState<FileList | null>();
  const [vectoreStore, setVectoreStore] = useState()
    const { completion, input, handleInputChange, handleSubmit } = useCompletion({
    api: "/api/chat",
  }); 
  const context = useContext(ModalContext);
  // rework flow - need load file first and after show chat
  return (
    <div className="w-full">
       <button onClick={()=>context?.setShowModal(true)}>Upload Document</button>
{/*       <form action={addEmbeding}>
      <input
        type="file"
        name="document"
        id="doc"
        accept=".pdf,.txt"
        onChange={(e) => setfile(e.currentTarget.files)}
      />
      </form> */}
      
           <form className="flex flex-col" onSubmit={handleSubmit}>
        <div>{completion}</div>
        <input
          name="prompt"
          value={input}
          onChange={handleInputChange}
          id="input"
        />
        
        <button type="submit">Send</button>
      
      </form> 
    </div>
  );
};

export default DocumentsPage;
