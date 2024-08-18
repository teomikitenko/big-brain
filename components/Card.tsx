import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { FilesType, NotesType } from '@/types/types';

const CardComponent = ({ data }: { data: FilesType | NotesType }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className=" text-lg sm:text-xl md:text-xl">{data.data.title}</CardTitle>
        {data.type === 'files' ? (
          <CardDescription className="hyphens-auto text-pretty break-words text-sm md:text-base" lang='en'>{data.data.describtion}</CardDescription>
        ) : (
          <CardDescription className="hyphens-auto text-pretty break-all" lang='en'>{data.data.text}</CardDescription>
        )}
      </CardHeader>
    </Card>
  );
};

export default CardComponent;
