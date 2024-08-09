"use client";
import React, { useState } from "react";
import Chat from "./Chat";
import { Button } from "./ui/button";
import { Doc } from "@/convex/_generated/dataModel";
import DocumentComponent from "./DocumentComponent";
import { DeleteIcon } from "./Icons";

const DocInteraction = ({ doc }: { doc: Doc<"files"> }) => {
  const [choiceAction, setChoiceAction] = useState("document");
  const componentToRender =
    choiceAction === "chat" ? <Chat /> : <DocumentComponent doc={doc} />;
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <h1 className="text-slate-100 text-3xl font-bold">{doc.title}</h1>
        <Button size="sm" variant="destructive" className="flex gap-2"> {/* add delete feauters */}
         <DeleteIcon/>
          <p>Delete</p>
        </Button>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex gap-2 rounded-md bg-[#5b5b5b] w-fit p-1">
          <Button
            className={`bg-transparent ${choiceAction === "document" && "bg-stone-950"}`}
            onClick={() => setChoiceAction("document")}
            size="switchButtons"
          >
            Document
          </Button>
          <Button
            className={`bg-transparent ${choiceAction === "chat" && "bg-stone-950"}`}
            onClick={() => setChoiceAction("chat")}
            size="switchButtons"
          >
            Chat
          </Button>
        </div>
        <div>{componentToRender}</div>
      </div>
    </div>
  );
};

export default DocInteraction;
