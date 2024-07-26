import UploadButton from "@/components/UploadButton";
import Chat from "@/components/Chat";

export const dynamic = "force-dynamic";

//TODO - implement chat functional this api route

const DocumentsPage = () => {
  return (
    <div className="w-full">
      <UploadButton/>
      <Chat/>
    </div>
  );
};

export default DocumentsPage;
