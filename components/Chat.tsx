'use client'
import { useContext} from "react";
import { useCompletion } from "ai/react";
import { ModalContext } from "./Provider";

const Chat = () => {
    const context = useContext(ModalContext); 
    const { completion, input, handleInputChange, handleSubmit } = useCompletion({
      api: "/api/chat",
      body:context?.resultGenerateData?.store
    }); 
  return (
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
  )
}

export default Chat