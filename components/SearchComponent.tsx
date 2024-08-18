'use client';

import SearchCard from './SearchCard';
import { Button } from './ui/button';
import useSearchQuery from '@/hooks/useSearchQuery';
import { LoaderCircle, Search } from 'lucide-react';

export const dynamic = 'force-dynamic';

const SearchComponent = () => {
  const { sendSearchQuery, status, inputState, setInputState, searchResults } = useSearchQuery();
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-bold text-slate-100 sm:text-2xl md:text-3xl">Search</h1>
      <form className="flex justify-around gap-1 sm:gap-2" onSubmit={(e) => sendSearchQuery(e)}>
        <input
          type="text"
          name="search"
          onChange={(e) => setInputState(e.currentTarget.value)}
          value={inputState}
          className="grow rounded-md border border-white bg-stone-950 p-1 text-slate-100 outline-0"
          placeholder="Search over all you notes and documents using vector searching"
        />
        <Button
          className="flex  items-center justify-center bg-transparent px-1 py-0 text-slate-200 hover:bg-slate-200 sm:bg-secondary sm:px-4 sm:py-2"
          type="submit"
        >
          {status === 'loading' ? (
            <LoaderCircle size={28} className="animate-spin stroke-slate-600 stroke-2 sm:w-11" />
          ) : (
            <>
              <p className="hidden text-slate-900 sm:inline">Search</p>
              <Search className="block sm:hidden" size={28} strokeWidth={1.25} />
            </>
          )}
        </Button>
      </form>
      <div className="flex flex-col gap-2">
        {searchResults && searchResults.length > 0
          ? searchResults?.map((res) => {
              return <SearchCard key={res.data._id} searchResult={res} />;
            })
          : searchResults?.length === 0 && <p className="text-gray-500">No results</p>}
      </div>
    </div>
  );
};

export default SearchComponent;
