import { Doc } from '@/convex/_generated/dataModel';
import React from 'react';

const DocumentComponent = ({ doc }: { doc: Doc<'files'> }) => {
  return (
    <div className="bg-primary rounded-xl px-3 py-1 max-h-[25rem] overflow-y-scroll">
      <p className="text-slate-100 p-2">{doc?.text}</p>
    </div>
  );
};

export default DocumentComponent;
