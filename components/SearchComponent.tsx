'use client';
import { useState } from 'react';
import { Button } from './ui/button';
import vectoreSearch from '@/app/actions/search';
import SearchCard from './SearchCard';
import type { SearchResultType } from '@/types/types';

const SearchComponent = () => {
  const [searchResults, setSearchResults] = useState<SearchResultType>();
  const sendSearchQuery = async (formData: FormData) => {
    setSearchResults(undefined);
    const res = await vectoreSearch(formData);
    console.log(res);
    setSearchResults(res);
  };
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-slate-100 font-bold text-3xl">Search</h1>
      <form className="flex gap-3" action={(e) => sendSearchQuery(e)}>
        <input
          type="text"
          name="search"
          className="rounded-md p-1 border-white border outline-0 bg-stone-950 text-slate-100 grow"
          placeholder="Search over all you notes and documents using vector searching"
        />
        <Button type="submit" variant="secondary">
          Search
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
