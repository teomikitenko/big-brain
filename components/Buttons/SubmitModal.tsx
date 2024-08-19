import { ModalContext } from '../Provider';
import { Button } from '../ui/button';
import { LoaderCircle } from 'lucide-react';
import React from 'react';
import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';

const SubmitModal = ({ pending, type }: { pending: boolean; type: 'create' | 'delete' }) => {
  const context = useContext(ModalContext);
  return (
    <div className="flex justify-between gap-3">
      <Button
        type="submit"
        className={twMerge(
          'flex items-center justify-center px-4 py-0 sm:px-4 sm:py-2',
          type === 'create' ? 'bg-secondary hover:bg-secondary' : 'bg-destructive hover:bg-destructive/80 grow',
        )}
      >
        {pending ? (
          <LoaderCircle size={28} className="animate-spin stroke-slate-600 stroke-2 sm:w-11" />
        ) : (
          <>
            <p className={twMerge(type === 'create' ? 'text-slate-900' : 'text-slate-200')}>
              {type === 'create' ? 'Create' : 'Delete'}
            </p>
          </>
        )}
      </Button>
      {type === 'delete' && (
        <Button
          type="button"
          onClick={() =>
            context?.setModalData({
              show: false,
              type: undefined,
              deleteData: undefined,
            })
          }
          className="grow"
          variant="secondary"
        >
          <p className="text-slate-900">Cancel</p>
        </Button>
      )}
    </div>
  );
};

export default SubmitModal;
