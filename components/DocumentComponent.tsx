import { Doc } from '@/convex/_generated/dataModel';
import React from 'react';

const DocumentComponent = ({ doc }: { doc: Doc<'files'> }) => {
  return (
    <div className="max-h-[25rem] overflow-y-scroll rounded-xl bg-primary px-3 py-1">
      <p className="p-2 text-slate-100">{doc?.text}</p>
    </div>
  );
};

export default DocumentComponent;
