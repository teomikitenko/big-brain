import React from "react";
import SearchComponent from "@/components/SearchComponent";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";

const Search = async() => {
  
  return <SearchComponent  />;
};

export default Search;
