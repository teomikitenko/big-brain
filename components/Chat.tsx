"use client";
import { useCompletion } from "ai/react";
import { Id } from "../convex/_generated/dataModel";
import { useParams } from "next/navigation";

const Chat = () => {
  const { id } = useParams<{ id: Id<"files"> }>();
  const { completion, input, handleInputChange, handleSubmit } = useCompletion({
    api: "/api/chat",
    body: { id: JSON.stringify(id) },
  });
  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div>{completion}</div>
      <label htmlFor="input">Chat</label>
      <input
        name="prompt"
        value={input}
        onChange={handleInputChange}
        id="input"
      />

      <button type="submit">Send</button>
    </form>
  );
};

export default Chat;
