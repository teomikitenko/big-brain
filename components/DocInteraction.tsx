"use client";
import React, { useState } from "react";
import Chat from "./Chat";
import { Button } from "./ui/button";
import { Doc } from "@/convex/_generated/dataModel";
import DocumentComponent from "./DocumentComponent";

const DocInteraction = ({ doc }: { doc: Doc<"files"> }) => {
  const [choiceAction, setChoiceAction] = useState("document");
  const componentToRender =
    choiceAction === "chat" ? <Chat /> : <DocumentComponent doc={doc} />;
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2 bg-slate-500 w-fit p-1">
        <Button
          onClick={() => setChoiceAction("document")}
          size="switchButtons"
        >
          Document
        </Button>
        <Button onClick={() => setChoiceAction("chat")} size="switchButtons">
          Chat
        </Button>
      </div>
      <div>{componentToRender}</div>
    </div>
  );
};

export default DocInteraction;
