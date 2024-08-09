"use client";
import { useCompletion } from "ai/react";
import { Id } from "../convex/_generated/dataModel";
import { useParams } from "next/navigation";
import { Button } from "./ui/button";
import { FormEvent } from "react";

const Chat = () => {
  const { id } = useParams<{ id: Id<"files"> }>();
  const { completion, input, handleInputChange, complete, setInput } =
    useCompletion({
      api: "/api/chat",
      body: { id: JSON.stringify(id) },
    });
  const sendToAi = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    complete(input);
    setInput("");
  };

  return (
    <div className="flex flex-col bg-primary h-[25rem] px-3 py-5">
      <div className="grow flex flex-col gap-2">
        <div className="bg-[#010415] px-2 py-1 rounded-lg min-h-0">
          <p className="text-slate-100">
            Ask any question using AI about this document below
          </p>
        </div>
        <div
          className={`${completion && "bg-[#010415]"}  px-2 py-1 rounded-lg min-h-0`}
        >
          <p className="text-slate-100">{completion}</p>
        </div>
      </div>
      <form className="flex gap-2" onSubmit={sendToAi}>
        <input
          className="rounded-md p-1 border-white border outline-0 bg-stone-950 text-slate-100 grow"
          name="prompt"
          value={input}
          onChange={handleInputChange}
        />
        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Chat;
