/* eslint-disable @next/next/no-img-element */
import { FormEvent, useState } from 'react';
import { Selector } from 'components/Selector';

interface SearchFormProps {
  onInputSubmit(value: string): void;
}

const SearchForm = ({ onInputSubmit }: SearchFormProps) => {
  const [queryValue, setQueryValue] = useState('');

  const [isSearchByAuthor, setIsSearchByAuthor] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryValue(event.target.value);
  };

  const onSubmit = (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    let query = queryValue.trim();

    if (query.length <= 1) return;
    if (isSearchByAuthor) {
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
      <div className='flex w-full flex-col items-center'>
        <p className='text-base'>Search by: </p>
        <div className='flex justify-center mb-4'>
          <label
            className='flex items-center ml-4 align-sub text-gray-900'
            htmlFor='searchByTitle'
          >
            Artwork title
            <input
              type='radio'
              name='searchBy'
              value='title'
              checked={!isSearchByAuthor}
              className='w-4 h-4 ml-2 text-blue-600 bg-gray-100 border-gray-300'
              onClick={() => setIsSearchByAuthor(false)}
              onChange={handleSearchTypeChange}
            />
          </label>
          <div className='flex align-baseline'>
            <label
              className='flex items-center ml-4 align-sub text-gray-900'
              htmlFor='searchByAuthor'
            >
              Author&apos;s name
              <input
                type='radio'
                name='searchBy'
                value='author'
                className='w-4 h-4 ml-2 text-blue-600 bg-gray-100 border-gray-300'
                onClick={() => setIsSearchByAuthor(true)}
                onChange={handleSearchTypeChange}
              />
            </label>
          </div>
        </div>
        <div className='flex'>
          {!isSearchByAuthor ? (
            <div className='relative w-56 sm:w-96'>
              <div className='flex absolute inset-y-0  items-center pl-3 pointer-events-none'>
                <img src='/icons/search.svg' alt='search' className='h-5' />
              </div>
              <input
                type='search'
                id='title-search'
                className='block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-l-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-300 outline-transparent'
                placeholder='Enter the artwork title'
                value={queryValue}
                onChange={onChange}
                required
              />
            </div>
          ) : (
            <div className='relative w-56 sm:w-96'>
              <Selector
                queryValue={queryValue}
                setQueryValue={setQueryValue}
                onSubmit={() => {
                  onSubmit();
                }}
              />
            </div>
          )}
          <button
            type='submit'
            className='text-white  right-2.5 bottom-2.5 bg-orange-500 hover:bg-orange-500 focus:ring-4 focus:outline-none font-medium rounded-r-lg text-sm px-4 py-2'
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export { SearchForm };
