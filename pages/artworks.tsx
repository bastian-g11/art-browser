import { NextPage } from 'next/types';
import { SearchSection, Navbar } from 'components';

const Artworks: NextPage = () => (
  <>
    <Navbar />
    <h1 className='text-orange-500 text-4xl text-center my-4'>Art Browser</h1>
    <SearchSection />
  </>
);

export default Artworks;
