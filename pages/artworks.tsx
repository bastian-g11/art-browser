import { NextPage } from 'next/types';
import { SearchSection } from 'components';

const Artworks: NextPage = () => (
  <>
    <h1 className='text-indigo-500 text-xl'>Art Browser</h1>
    <SearchSection />
  </>
);

export default Artworks;
