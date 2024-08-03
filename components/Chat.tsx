'use client'
import { useCompletion } from "ai/react";
import { Id } from "../convex/_generated/dataModel";


const Chat = ({fileId}:{fileId:Id<'files'>}) => { 
    const { completion, input, handleInputChange, handleSubmit } = useCompletion({
      api: "/api/chat",
      body:{id:JSON.stringify(fileId)}
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
  )
}

export default Chat