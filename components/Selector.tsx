/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import { getAuthors } from 'services/getAuthors';

interface AuthorOption {
  id: string;
  name: string;
}
const promiseOptions = (inputValue: string) => {
  const query = inputValue.toLowerCase();
  return getAuthors(query);
};

const Selector = ({ queryValue, setQueryValue, onSubmit }) => {
  const [inputLocalValue, setInputLocalValue] = useState('');
  const [selectedValue, setSelectedValue] = useState<AuthorOption>();

  const handleInputChange = (value: string) => {
    setInputLocalValue(value);
  };

  const handleChange = (value: AuthorOption) => {
    setSelectedValue(value);
    setQueryValue(value.id);
  };

  useEffect(() => {
    onSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryValue]);

  return (
    <AsyncSelect
      form='search-form'
      getOptionLabel={(option: AuthorOption) => option.name}
      getOptionValue={(option: AuthorOption) => option.id}
      defaultOptions
      value={selectedValue}
      loadOptions={promiseOptions}
      onInputChange={handleInputChange}
      onChange={handleChange}
    />
  );
};

export { Selector };
