import { addEmbeding } from "@/app/actions/addAndGenerateData";
import { addAndGenerateData } from "@/app/actions/addAndGenerateData";

export type FileCard = {
  title: string;
  text: string;
};
export type ResultStore = {
  store: any;
  title: string;
  text: string;
  describtion: string;
};
export type ConvexVectorStoreType = Awaited<ReturnType<typeof addEmbeding>>;
export type GenerateDataType = Awaited<ReturnType<typeof addAndGenerateData>>;

export type ProviderType = {
  showModal: boolean;
  resultGenerateData: GenerateDataType | undefined;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setResultGenerateData: React.Dispatch<
    React.SetStateAction<GenerateDataType | undefined>
  >;
};
