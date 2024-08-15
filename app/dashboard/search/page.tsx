import React from 'react';
import SearchComponent from '@/components/SearchComponent';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Search',
};

const Search = async () => {
  return <SearchComponent />;
};

export default Search;
