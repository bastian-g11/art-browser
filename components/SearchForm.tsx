import { FormEvent, useState } from 'react';
import { Selector } from 'components/Selector';

interface SearchFormProps {
  onInputSubmit(value: string): void;
}

const SearchForm = ({ onInputSubmit }: SearchFormProps) => {
  const [inputValue, setInputValue] = useState('');

  // FIXME: It is not that clear
  const [isByAuthor, setIsByAuthor] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newInputValue = inputValue.trim();

    if (newInputValue.length <= 1) return;
    onInputSubmit(newInputValue);
  };

  return (
    <form action='' onSubmit={onSubmit}>
      <p>Search by: </p>

      <label htmlFor='searchByTitle'>
        Artwork Title
        <input
          type='radio'
          name='searchBy'
          value='igotnone'
          onClick={() => setIsByAuthor(false)}
        />
      </label>

      <label htmlFor='searchByAuthor'>
        Artwork Title
        <input
          type='radio'
          name='searchBy'
          value='igottwo'
          onClick={() => setIsByAuthor(true)}
        />
      </label>

      {!isByAuthor ? (
        <div>
          <input
            type='text'
            placeholder='By title'
            value={inputValue}
            onChange={onChange}
          />
          <button type='submit'>Buscar</button>
        </div>
      ) : (
        <Selector />
      )}
    </form>
  );
};

export { SearchForm };
