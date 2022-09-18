import { useState } from 'react';
import AsyncSelect from 'react-select/async';
// import { getAuthors } from 'services/getAuthors';
import { ArtObject } from 'types';

const promiseOptions = (inputValue: string) => {
  const url = `https://www.rijksmuseum.nl/api/en/collection?key=KHn4xrLx&imgonly=True&q=${inputValue}`;
  return fetch(url)
    .then(res => res.json())
    .then(({ artObjects }) =>
      artObjects.map((artwork: ArtObject) => ({
        id: artwork.id,
        title: artwork.title,
      }))
    );
};

// handle input change event

const Selector = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [inputValue, setValue] = useState('');

  const handleInputChange = value => {
    setValue(value);
  };

  // handle selection
  const handleChange = value => {
    setSelectedValue(value);
  };
  return (
    <AsyncSelect
      getOptionLabel={e => e.title}
      getOptionValue={e => e.id}
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
