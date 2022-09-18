import { NextPage } from 'next/types';
import { useState } from 'react';
import { SearchBar, ArtworkGrid } from 'components';

const Artworks: NextPage = () => {
  // Should be search Term
  const [query, setQuery] = useState<string>('');

  const onSearch = (newQuery: string): void => {
    setQuery(newQuery);
  };
  return (
    <>
      <h1>Art Browser</h1>
      <div className='text-indigo-500'>
        NextJS Boilerplate with Tailwind and GraphQL
      </div>
      <SearchBar placeholder='enter' onSearch={onSearch} />

      <ArtworkGrid query={query} />
    </>
  );
};

export default Artworks;
