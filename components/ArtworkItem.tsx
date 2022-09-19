/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-console */
import { useMutation } from '@apollo/client';
import {
  ADD_ARTWORK_TO_USER,
  REMOVE_ARTWORK_FROM_USER,
} from '@graphql/client/mutations/users';
import { useState } from 'react';
import { Artwork, ErrorResponse } from 'types';
// import Image from 'next/image';

const addArtworkToFavorites = async (
  addArtworkToUser,
  { api_id, title, author, site_link, img_link }: Artwork
) => {
  try {
    await addArtworkToUser({
      // FIXME: User ID should be the one that is logged in
      variables: {
        addArtworkToUserId: 'cl868tylr0076r8u68ql0q7zg',
        artwork: {
          api_id,
          title,
          author,
          site_link,
          img_link,
        },
      },
      // FIXME: If I add refetchQueries a warning is shown
      // refetchQueries: [ADD_ARTWORK_TO_USER],
    });
  } catch (err) {
    console.log(err);
  }
};

const removeArtworkFromFavorites = async (
  removeArtworkFromUser,
  {
    user_id,
    api_id,
  }: {
    user_id: string;
    api_id: string;
  }
) => {
  try {
    await removeArtworkFromUser({
      // FIXME: User ID should be the one that is logged in
      variables: {
        removeArtworkFromUserId: user_id,
        artworkId: api_id,
      },
      // FIXME: If I add refetchQueries a warning is shown
      // refetchQueries: [REMOVE_ARTWORK_FROM_USER],
    });
  } catch (err) {
    console.log(err);
  }
};

const ArtworkItem = ({
  api_id,
  title,
  author,
  site_link,
  img_link,
  isFavorite,
}: Artwork) => {
  const [addArtworkToUser, { loading: savingAtwork }] = useMutation(
    ADD_ARTWORK_TO_USER
  );
  const [removeArtworkFromUser, { loading: removingArtwork }] = useMutation(
    REMOVE_ARTWORK_FROM_USER
  );
  const [checkedAsFavorite, setCheckedAsFavorite] = useState(isFavorite);

  const toggleAddToFavorites = async event => {
    console.log('Add to favorite', event.target.checked);

    const maskedAsFavorite = event.target.checked;

    setCheckedAsFavorite(maskedAsFavorite);
    if (maskedAsFavorite) {
      console.log('Save');

      addArtworkToFavorites(addArtworkToUser, {
        api_id,
        title,
        author,
        site_link,
        img_link,
        isFavorite,
      });
    } else {
      console.log('Delete');
      // FIXME: UserID should be pass dynamically
      removeArtworkFromFavorites(removeArtworkFromUser, {
        user_id: 'cl868tylr0076r8u68ql0q7zg',
        api_id,
      });
    }
  };

  return (
    // <div className='max-w-[470px] md:max-w-sm mt-4 bg-white border border-gray-200 shadow-md '>
    <div className='my-1 px-1 w-full md:w-1/2 lg:my-4  lg:w-1/3 bg-white border border-gray-200 shadow-md '>
      <div className='aspect-square'>
        <img
          src={img_link}
          className='object-cover h-full w-full'
          alt='Artwork'
        />
      </div>
      <div className='p-5'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 truncate'>
          {title}
        </h5>
        <p className='mb-3 font-normal text-gray-700'>{author}</p>
        <div className='flex justify-between items-end'>
          <a
            href={site_link}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
          >
            Go to site
          </a>
          <a
            href={site_link}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
          >
            Add to Favs
          </a>
        </div>
      </div>
    </div>
  );
};
export { ArtworkItem };
