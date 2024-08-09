import { Button } from "../ui/button";
const UploadDocsForm = ({
  sendFile,
}: {
  sendFile: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}) => {
  return (
    <form onSubmit={(e) => sendFile(e)} className="flex flex-col gap-2">
      <label htmlFor="title">Title</label>
      <input type="text" name="title" className="p-1 border rounded-md" />
      <label htmlFor="file">File</label>
      <input
        type="file"
        className="flex border rounded-md p-1 text-sm"
        name="file"
      />
      <div>
        <Button type="submit" size="custom" variant="default">
          Upload
        </Button>
      </div>
    </form>
  );
};
export default UploadDocsForm;
