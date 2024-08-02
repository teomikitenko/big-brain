import { Doc } from '@/convex/_generated/dataModel'
import React from 'react'

const DocumentComponent = ({doc}:{doc:Doc<'files'>}) => {
  return (
    <div className="bg-slate-700">
    <p className="text-white p-2">{doc?.title}</p>
    <p className="text-white p-2">{doc?.text}</p>
  </div>
  )
}

export default DocumentComponent