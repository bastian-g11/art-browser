import { NextPage } from 'next/types';
import { SearchSection, Navbar } from 'components';
import Head from 'next/head';

const Artworks: NextPage = () => (
  <>
    <Head>
      <title>Artworks</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Navbar />
    <h1 className='text-orange-500 text-4xl text-center my-4'>Art Browser</h1>
    <SearchSection />
  </>
);

export default Artworks;
