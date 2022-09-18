import { SearchBar } from 'components/SearchBar';
import { Selector } from 'components/Selector';
import { useState } from 'react';

interface Props {
  onSearch(value: string): void;
}

const SearchSection = ({ onSearch }: Props) => {
  const [isByAuthor, setIsByAuthor] = useState(false);
  return (
    <>
      <p>Search by: </p>
      <input
        type='radio'
        name='tab'
        value='igotnone'
        onClick={() => setIsByAuthor(false)}
      />
      Atwork Title
      <input
        type='radio'
        name='tab'
        value='igottwo'
        onClick={() => setIsByAuthor(true)}
      />
      Author
      {!isByAuthor ? (
        <SearchBar placeholder='Search by title' onSearch={onSearch} />
      ) : (
        <Selector />
      )}
    </>
  );
};

export { SearchSection };
