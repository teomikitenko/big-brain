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

export type ModalType = {
  show: boolean;
  type:'uploadDoc'|'createNote'|undefined
}

export type ProviderType = {
  modalData: ModalType;
  setModalData: React.Dispatch<React.SetStateAction<ModalType>>;
};
