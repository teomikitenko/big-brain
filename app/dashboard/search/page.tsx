import SearchComponent from '@/components/SearchComponent';
import { Metadata } from 'next/types';
import React from 'react';

export const metadata: Metadata = {
  title: 'Search',
};

const Search = async () => {
  return <SearchComponent />;
};

export default Search;
