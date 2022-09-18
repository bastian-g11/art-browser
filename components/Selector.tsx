/* eslint-disable no-console */
import { useState } from 'react';
import AsyncSelect from 'react-select/async';
// import { getAuthors } from 'services/getAuthors';
import { ArtObject } from 'types';
import axios from 'axios';

interface AuthorOption {
  id: string;
  name: string;
}

const promiseOptions = (inputValue: string) => {
  const url = `/api/getAuthors`;
  return axios.get(url).then(({ data }) => data);
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
      cacheOptions
      defaultOptions
      value={selectedValue}
      loadOptions={promiseOptions}
      onInputChange={handleInputChange}
      onChange={handleChange}
    />
  );
};

export { Selector };
