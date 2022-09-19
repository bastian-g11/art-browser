import { useMutation, useQuery } from '@apollo/client';
import { GET_USER_TRANSACTIONS } from '@graphql/client/queries/users';
import { Artwork } from 'types';
// import Image from 'next/image';

const ArtworkItem = ({ title, author, site_link, img_link }: Artwork) => {
  return (
    <div>
      {/* TODO: Should I use next image? */}
      {/* images: { */}
      {/* //   domains: ['lh3.googleusercontent.com'], */}
      {/* // }, */}
      {/* //   <Image src={webImage.url} alt='Artwork image' width={500} height={500} /> */}
      <img src={img_link} height='500' width='500' alt='Artwork' />
      <h1>{author}</h1>
      <p>{title}</p>
      <a href={site_link}>Link to the Rijksmuseum site</a>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Add
      </button>
    </div>
  );
};
export { ArtworkItem };
