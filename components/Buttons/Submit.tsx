import { LoaderCircle, Search } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import { useFormStatus } from 'react-dom';

const Submit = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      className="flex  justify-center px-1 py-0 sm:px-4 sm:py-2 items-center text-slate-200 bg-transparent hover:bg-slate-200 sm:bg-secondary"
      type="submit"
    >
      {pending ? (
        <LoaderCircle size={28} className="animate-spin stroke-slate-600 stroke-2 sm:w-11" />
      ) : (
        <>
          <p className="hidden sm:inline text-slate-900">Search</p>
          <Search className="block sm:hidden" size={28} strokeWidth={1.25} />
        </>
      )}
    </Button>
  );
};

export default Submit;
