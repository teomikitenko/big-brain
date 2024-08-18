import { addEmbeding } from '@/app/actions/addAndGenerateData';
import { addAndGenerateData } from '@/app/actions/addAndGenerateData';
import { Doc, Id } from '@/convex/_generated/dataModel';

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
  type: 'uploadDoc' | 'createNote' | undefined;
};

export type ProviderType = {
  modalData: ModalType;
  setModalData: React.Dispatch<React.SetStateAction<ModalType>>;
};
export type SearchResultType = {
  documents: DocsType[];
  notes: NotesType[];
};
export type SearchResultTypeArray = (DocsType | NotesType)[];

export type FilesType = {
  data: Doc<'files'>;
  type: 'files';
};
export type NotesType = {
  data: Doc<'notes'>;
  type: 'note';
};
export type DocsType = {
  data: Doc<'documents'>;
  type: 'documents';
};
export type FileType = {
  id: Id<'files'>;
  documentId: Id<'documents'>;
  type: 'file';
};
export type NoteType = {
  id: Id<'notes'>;
  type: 'note';
};
export type DeleteFileType = {
  id: Id<'notes'>;
  type: 'note';
};
