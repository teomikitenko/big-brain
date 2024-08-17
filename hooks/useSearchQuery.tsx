import { SearchResultTypeArray } from '@/types/types';
import React, { FormEvent, useState } from 'react';
import vectoreSearch from '@/app/actions/search';

const useSearchQuery = () => {
  const [status, setStatus] = useState<'idle'|'loading'|'complete'>('idle');
  const [inputState, setInputState] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResultTypeArray | undefined>();
  const sendSearchQuery = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setStatus('loading');
      setInputState('');
      const formData = new FormData(e.currentTarget);
      const res = await vectoreSearch(formData);
      const resultArr = [...res!.documents, ...res!.notes];
      setSearchResults(resultArr);
      setStatus('complete');
  };
  return { sendSearchQuery, status, inputState, setInputState, searchResults };
};

export default useSearchQuery;
