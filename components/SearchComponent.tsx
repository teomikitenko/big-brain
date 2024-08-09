"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Note, Document } from "./Icons";
import vectoreSearch from "@/app/actions/search";
import { Doc } from "@/convex/_generated/dataModel";
import SearchCard from "./SearchCard";

const SearchComponent = () => {
  const [searchResults, setSearchResults] = useState<Doc<"documents">[]>([]);
  const sendSearchQuery = async (formData: FormData) => {
    setSearchResults([]);
    const res = await vectoreSearch(formData);
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
        {searchResults.map((res) => (
          <SearchCard key={res._id} res={res} />
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
