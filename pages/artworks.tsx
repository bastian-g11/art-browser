import { NextPage } from 'next/types';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { SearchBar, ArtworkGrid } from 'components';

const Artworks: NextPage = () => {
  // Should be search Term
  const [categories, setCategories] = useState<string[]>([]);

  const onAddCategory = (newCategory: string): void => {
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>Art Browser</h1>
      <div className='text-indigo-500'>
        NextJS Boilerplate with Tailwind and GraphQL
      </div>
      <SearchBar placeholder='enter' onAddCategory={onAddCategory} />

      {categories.map(category => (
        <ArtworkGrid key={nanoid()} category={category} />
      ))}
    </>
  );
};

export default Artworks;
