import React from 'react';
import { Button } from '../ui/button';
import { LoaderCircle } from 'lucide-react';

const SubmitModal = ({pending}:{pending:boolean}) => {
  return (
    <Button
      className="flex  items-center justify-center bg-secondary px-4 py-0 hover:bg-secondary sm:px-4 sm:py-2"
      type="submit"
    >
       {pending ? (
        <LoaderCircle size={28} className="animate-spin stroke-slate-600 stroke-2 sm:w-11"/>
      ) : (
        <> 
          <p className="inline text-slate-900">Create</p>
         </>
      )} 
    </Button>
  );
};

export default SubmitModal;