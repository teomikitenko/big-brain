import { Button } from '../ui/button';
const UploadDocsForm = ({ sendFile }: { sendFile: (e: React.FormEvent<HTMLFormElement>) => Promise<void> }) => {
  return (
    <form onSubmit={(e) => sendFile(e)} className="flex flex-col gap-2">
      <label htmlFor="title" className="text-slate-200">
        Title
      </label>
      <input type="text" name="title" className="p-2 rounded-md outline-0 bg-stone-950 text-slate-100" />
      <label className="text-slate-200" htmlFor="file">
        File
      </label>
      <input type="file" accept='text/plain' className="flex rounded-md p-2 text-sm bg-stone-950 text-slate-200 " name="file" />
      <div>
        <Button type="submit" size="custom" variant="secondary">
          Upload
        </Button>
      </div>
    </form>
  );
};
export default UploadDocsForm;
