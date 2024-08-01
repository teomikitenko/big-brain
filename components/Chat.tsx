'use client'
import { useCompletion } from "ai/react";

const Chat = () => { 
    const { completion, input, handleInputChange, handleSubmit } = useCompletion({
      api: "/api/chat",
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