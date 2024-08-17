import { FormEvent, useTransition } from "react";
import SubmitModal from "../Buttons/SubmitModal";
const UploadDocsForm = ({ sendFile }: { sendFile: (e: React.FormEvent<HTMLFormElement>) => Promise<void> }) => {
  const [isPending, startTransition] = useTransition();
  const upload = (e:FormEvent<HTMLFormElement>)=>{
    startTransition(
     async()=>{
       await sendFile(e)
     }
    )
   }
  return (
    <form onSubmit={(e) => upload(e)} className="flex flex-col gap-2">
      <label htmlFor="title" className="text-slate-200">
        Title
      </label>
      <input type="text" name="title" className="p-2 rounded-md outline-0 bg-stone-950 text-slate-100" />
      <label className="text-slate-200" htmlFor="file">
        File
      </label>
      <input type="file" accept='text/plain' className="flex rounded-md p-2 text-sm bg-stone-950 text-slate-200 " name="file" />
      <div>
        <SubmitModal pending={isPending} key='upload'/>
      </div>
    </form>
  );
};
export default UploadDocsForm;
