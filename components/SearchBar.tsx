import { FormEvent, useState } from 'react';

interface SearchBarProps {
  placeholder: string;
  onSearch(value: string): void;
}

const SearchBar = ({ placeholder, onSearch }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newInputValue = inputValue.trim();

    if (newInputValue.length <= 1) return;
    onSearch(newInputValue);

    // FIXME: Should be empty or the text should be left
    setInputValue('');
  };

  return (
    <form action='' onSubmit={onSubmit}>
      <div>SearchBar</div>
      <input
        type='text'
        placeholder={placeholder}
        value={inputValue}
        onChange={onChange}
      />
    </form>
  );
};

export { SearchBar };