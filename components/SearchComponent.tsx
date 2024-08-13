'use client';
import { useState } from 'react';
import { Button } from './ui/button';
import vectoreSearch from '@/app/actions/search';
import SearchCard from './SearchCard';
import type { SearchResultType } from '@/types/types';
import { Search } from 'lucide-react';

export const dynamic = 'force-dynamic';

const SearchComponent = () => {
  const [inputState, setInputState] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResultType>();
  const sendSearchQuery = async (formData: FormData) => {
    setSearchResults(undefined);
    const res = await vectoreSearch(formData);
    setSearchResults(res);
    setInputState('')
  };
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-slate-100 font-bold text-xl sm:text-2xl md:text-3xl">Search</h1>
      <form className="flex gap-1 justify-around sm:gap-2" action={(e) => sendSearchQuery(e)}>
        <input
          type="text"
          name="search"
          onChange={(e)=>setInputState(e.currentTarget.value)}
          value={inputState}
          className="rounded-md p-1 border-white border outline-0 bg-stone-950 text-slate-100 grow"
          placeholder="Search over all you notes and documents using vector searching"
        />
        <Button
          className="flex max-[640px]:focus-visible:ring-0 max-[640px]:hover:bg-transparent justify-center px-1 py-0 sm:px-4 sm:py-2 items-center text-slate-200 bg-transparent hover:bg-slate-00 sm:bg-secondary"
          type="submit"
        >
          <p className="hidden sm:inline text-slate-900">Search</p>
          <Search className="block sm:hidden" size={28} strokeWidth={1.25} />
        </Button>
      </form>
      <div className="flex flex-col gap-2">
        {searchResults?.documents.map((res) => (
          <SearchCard key={res._id} searchResult={{ data: res, type: 'documents' }} />
        ))}
        {searchResults?.notes.map((res) => <SearchCard key={res._id} searchResult={{ data: res, type: 'note' }} />)}
      </div>
    </div>
  );
};

export default SearchComponent;
