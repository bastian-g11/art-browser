import { NextPage } from 'next/types';
import { useState } from 'react';
import { ArtworkGrid, SearchSection } from 'components';

const Artworks: NextPage = () => {
  const [query, setQuery] = useState<string>('');

  const onSearch = (newQuery: string): void => {
    setQuery(newQuery);
  };
  return (
    <>
      <h1 className='text-indigo-500 text-xl'>Art Browser</h1>
      <SearchSection onSearch={onSearch} />
      {/* TODO: Add if the search is by author or title  */}
      {query && <ArtworkGrid query={query} />}
    </>
  );
};

export default Artworks;
