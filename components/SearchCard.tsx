import React from 'react'
import { Document } from "./Icons";
import { Doc } from '@/convex/_generated/dataModel';

const SearchCard = ({res}:{res:Doc<'documents'>}) => {
  return (
    <div className="flex flex-col w-full gap-2 bg-[#1d293b] p-3 text-slate-100">
    <div className="flex gap-1 items-center">
     <Document/>
    <h1>Document</h1>
     </div> 
     <p className="line-clamp-2">
       {res.text}
     </p>
   </div>
  )
}

export default SearchCard