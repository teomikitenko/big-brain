'use client';
import React, { useState } from 'react';
import Chat from './Chat';
import { Button } from './ui/button';
import { Doc, Id } from '@/convex/_generated/dataModel';
import DocumentComponent from './DocumentComponent';
import DeleteButton from './Buttons/DeleteButton';

const DocInteraction = ({ doc }: { doc: Doc<'files'> }) => {
  const [choiceAction, setChoiceAction] = useState('document');
  const componentToRender = choiceAction === 'chat' ? <Chat /> : <DocumentComponent doc={doc} />;
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <h1 className="text-slate-100 text-3xl font-bold">{doc.title}</h1>
        <DeleteButton
          data={{
            id: doc._id,
            documentId: doc.documentId!,
            type: 'file',
          }}
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex gap-2 rounded-md bg-[#5b5b5b] w-fit p-1">
          <Button
            className={`bg-transparent ${choiceAction === 'document' && 'bg-stone-950'}`}
            onClick={() => setChoiceAction('document')}
            size="switchButtons"
          >
            Document
          </Button>
          <Button
            className={`bg-transparent ${choiceAction === 'chat' && 'bg-stone-950'}`}
            onClick={() => setChoiceAction('chat')}
            size="switchButtons"
          >
            Chat
          </Button>
        </div>
        <div>{componentToRender}</div>
      </div>
    </div>
  );
};

export default DocInteraction;
