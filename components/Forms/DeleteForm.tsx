import SubmitModal from '../Buttons/SubmitModal';
import { ModalType } from '@/types/types';
import { Dispatch, FormEvent, SetStateAction, useTransition } from 'react';

const DeleteForm = ({
  deleteAction,
  setModalData,
}: {
  setModalData: Dispatch<SetStateAction<ModalType>> | undefined;
  deleteAction: () => Promise<void>;
}) => {
  const [isPending, startTransition] = useTransition();
  const deleteHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(async () => {
      await deleteAction();
      setTimeout(() => {
        setModalData!({
          show: false,
          type: undefined,
          deleteData: undefined,
        });
      }, 100);
    });
  };
  return (
    <form onSubmit={deleteHandler} className="flex flex-col gap-2">
      <div>
        <SubmitModal pending={isPending} key="delete" type="delete" />
      </div>
    </form>
  );
};

export default DeleteForm;
