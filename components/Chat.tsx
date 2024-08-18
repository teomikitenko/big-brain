'use client';

import { Id } from '../convex/_generated/dataModel';
import { Button } from './ui/button';
import { useCompletion } from 'ai/react';
import { LoaderCircle, Send } from 'lucide-react';
import { useParams } from 'next/navigation';
import { FormEvent } from 'react';

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
    <div className="flex min-h-[25rem] flex-col bg-primary px-3 py-5">
      <div className="flex grow flex-col gap-2">
        <div className="min-h-0 rounded-lg bg-[#010415] px-2 py-1">
          <p className="text-slate-100">Ask any question using AI about this document below</p>
        </div>
        <div className={`${completion && 'bg-[#010415]'}  min-h-0 rounded-lg px-2 py-1`}>
          <p className="text-slate-100">{completion}</p>
        </div>
      </div>
      <form className="mt-4 flex w-full justify-around gap-1 sm:gap-2" onSubmit={sendToAi}>
        <input
          className="w-[85%] rounded-md border border-white bg-stone-950 p-1 text-slate-100 outline-0 sm:grow "
          name="prompt"
          value={input}
          onChange={handleInputChange}
        />
        <Button
          className="flex  items-center justify-center  bg-transparent px-1 py-0 hover:bg-transparent sm:bg-secondary sm:px-4 sm:py-2 sm:hover:bg-secondary"
          type="submit"
        >
          {isLoading ? (
            <LoaderCircle size={28} className="animate-spin stroke-slate-600 stroke-2 sm:w-11" />
          ) : (
            <>
              <p className="hidden text-slate-950 sm:inline">Submit</p>
              <Send className="block sm:hidden" size={30} strokeWidth={1.25} />
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default Chat;
