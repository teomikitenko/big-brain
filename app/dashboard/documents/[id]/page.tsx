import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import DocInteraction from "@/components/DocInteraction";

export default async function DocPage({
  params,
}: {
  params: { id: Id<"files"> | null };
}) {
  const document = await fetchQuery(api._getById.getById.getById, {
    id: params.id!,
  });
  return <DocInteraction doc={document!} />;
}
