import { NextPage } from 'next/types';
import Link from 'next/link';
import { SearchSection, Navbar } from 'components';

const Artworks: NextPage = () => (
  <>
    <Navbar />
    <h1 className='title'>
      Read <Link href='/profile'>this page!</Link>
    </h1>{' '}
    <h1 className='text-indigo-500 text-xl'>Art Browser</h1>
    <SearchSection />
  </>
);

export default Artworks;
