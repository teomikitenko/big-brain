'use server';
import { api } from '@/convex/_generated/api';
import { fetchAction } from 'convex/nextjs';

export default async function vectoreSearch(formData: FormData) {
  const searchQuery = formData.get('search');
  const search = await fetchAction(api._vectoreSearch.searchData.vectoreSearchDocument, {
    searchQuery: searchQuery as string,
  });
  return search;
}
