/* eslint-disable no-console */
import { useState } from 'react';
import AsyncSelect from 'react-select/async';
// import { getAuthors } from 'services/getAuthors';
import { ArtObject } from 'types';

interface AuthorOption {
  id: string;
  name: string;
}

const promiseOptions = (inputValue: string) => {
  const url = `/api/authors`;
  return fetch(url).then(data => data.json());
};

// handle input change event

const Selector = () => {
  const [selectedValue, setSelectedValue] = useState<AuthorOption>();
  const [inputValue, setValue] = useState('');

  const handleInputChange = (value: string) => {
    setValue(value);
  };

  // handle selection
  const handleChange = value => {
    setSelectedValue(value);
  };
  return (
    <AsyncSelect
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
