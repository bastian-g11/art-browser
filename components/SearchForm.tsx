import { FormEvent, useState } from 'react';
import { Selector } from 'components/Selector';

interface SearchFormProps {
  onInputSubmit(value: string): void;
}

const SearchForm = ({ onInputSubmit }: SearchFormProps) => {
  const [queryValue, setQueryValue] = useState('');

  // FIXME: It is not that clear
  const [isByAuthor, setIsByAuthor] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryValue(event.target.value);
  };

  const onSubmit = (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    let query = queryValue.trim();

    if (query.length <= 1) return;
    if (isByAuthor) {
      query = `involvedMaker=${query}`;
    } else {
      query = `q=${query}`;
    }
    onInputSubmit(query);
  };

  const handleSearchTypeChange = () => {
    setQueryValue('');
  };

  return (
    <form id='search-form' action='' onSubmit={onSubmit}>
      <p>Search by: </p>
      {/* FIXME: Select one radio button by default */}
      <label htmlFor='searchByTitle'>
        Artwork Title
        <input
          type='radio'
          name='searchBy'
          value='title'
          onClick={() => setIsByAuthor(false)}
          onChange={handleSearchTypeChange}
        />
      </label>
      <label htmlFor='searchByAuthor'>
        Author&apos;s name
        <input
          type='radio'
          name='searchBy'
          value='author'
          onClick={() => setIsByAuthor(true)}
          onChange={handleSearchTypeChange}
        />
      </label>
      {!isByAuthor ? (
        <div>
          <input
            type='text'
            placeholder='By title'
            value={queryValue}
            onChange={onChange}
          />
        </div>
      ) : (
        <Selector
          queryValue={queryValue}
          setQueryValue={setQueryValue}
          onSubmit={() => {
            onSubmit();
          }}
        />
      )}
      <button type='submit'>Buscar</button>
    </form>
  );
};

export { SearchForm };
