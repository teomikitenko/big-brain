import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import UploadButton from "@/components/UploadButton";
import Link from "next/link";


const DocumentsPage = async () => {
  const documents = await fetchQuery(api._getAll.getAll.getAllFiles);
  return (
    <div className="w-full"> 
      <UploadButton />   {/* need add delete card feature */}
      <p>My Documents</p>
      <div className="grid grid-cols-4 gap-2">
      {documents.map((doc) => (
        <Link key={doc._id} href={`documents/${doc._id}`}>
        <Card>
          <CardHeader>
            <CardTitle>{doc.title}</CardTitle>
            <CardDescription>{doc.describtion}</CardDescription>
          </CardHeader>
        </Card>
        </Link>
      ))}
      </div>
    </div>
  );
};

export default DocumentsPage;
