import React from 'react';
import { Button } from '../ui/button';
import { LoaderCircle } from 'lucide-react';

const SubmitModal = ({pending}:{pending:boolean}) => {
  return (
    <Button
      className="flex  justify-center px-4 py-0 sm:px-4 sm:py-2 hover:bg-secondary items-center bg-secondary"
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