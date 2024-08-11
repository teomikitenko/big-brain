import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { FilesType, NotesType } from '@/types/types';

const CardComponent = ({ data }: { data: FilesType | NotesType }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className=" text-lg sm:text-xl md:text-xl">{data.data.title}</CardTitle>
        {data.type === 'files' ? (
          <CardDescription className="text-pretty text-sm md:text-base">{data.data.describtion}</CardDescription>
        ) : (
          <CardDescription className="break-words text-pretty">{data.data.text}</CardDescription>
        )}
      </CardHeader>
    </Card>
  );
};

export default CardComponent;
