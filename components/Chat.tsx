'use client';
import { useCompletion } from 'ai/react';
import { Id } from '../convex/_generated/dataModel';
import { useParams } from 'next/navigation';
import { Button } from './ui/button';
import { FormEvent } from 'react';
import { LoaderCircle, Send } from 'lucide-react';

const Chat = () => {
  const { id } = useParams<{ id: Id<'files'> }>();
  const { completion, input, handleInputChange, complete, setInput, isLoading } = useCompletion({
    api: '/api/chat',
    body: { id: JSON.stringify(id) },
  });
  const sendToAi = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    complete(input);
    setInput('');
  };

  return (
    <div className="flex flex-col bg-primary min-h-[25rem] px-3 py-5">
      <div className="grow flex flex-col gap-2">
        <div className="bg-[#010415] px-2 py-1 rounded-lg min-h-0">
          <p className="text-slate-100">Ask any question using AI about this document below</p>
        </div>
        <div className={`${completion && 'bg-[#010415]'}  px-2 py-1 rounded-lg min-h-0`}>
          <p className="text-slate-100">{completion}</p>
        </div>
      </div>
      <form className="flex gap-1 justify-around sm:gap-2 w-full mt-4" onSubmit={sendToAi}>
        <input
          className="rounded-md p-1 border-white border outline-0 bg-stone-950 text-slate-100 w-[85%] sm:grow "
          name="prompt"
          value={input}
          onChange={handleInputChange}
        />
        <Button
          className="flex  justify-center hover:bg-transparent  sm:hover:bg-secondary px-1 py-0 sm:px-4 sm:py-2 items-center bg-transparent sm:bg-secondary"
          type="submit"
        >
          {isLoading ? (
            <LoaderCircle size={28} className="animate-spin stroke-slate-600 stroke-2 sm:w-11" />
          ) : (
            <>
              <p className="hidden sm:inline text-slate-950">Submit</p>
              <Send className="block sm:hidden" size={30} strokeWidth={1.25} />
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default Chat;
