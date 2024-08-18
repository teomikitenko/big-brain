import { LoaderCircle, Search } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import { useFormStatus } from 'react-dom';

const Submit = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      className="flex  items-center justify-center bg-transparent px-1 py-0 text-slate-200 hover:bg-slate-200 sm:bg-secondary sm:px-4 sm:py-2"
      type="submit"
    >
      {pending ? (
        <LoaderCircle size={28} className="animate-spin stroke-slate-600 stroke-2 sm:w-11" />
      ) : (
        <>
          <p className="hidden text-slate-900 sm:inline">Search</p>
          <Search className="block sm:hidden" size={28} strokeWidth={1.25} />
        </>
      )}
    </Button>
  );
};

export default Submit;
