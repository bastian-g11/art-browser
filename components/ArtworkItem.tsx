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
  { userId, api_id, title, author, site_link, img_link }
) => {
  try {
    await addArtworkToUser({
      // FIXME: User ID should be the one that is logged in
      variables: {
        addArtworkToUserId: userId,
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
  artwork,
  isProfile = false,
  userId,
}: {
  artwork: Artwork;
  isProfile: boolean;
  userId: string;
}) => {
  const {
    api_id: apiId,
    title,
    author,
    site_link: siteLink,
    img_link: imgLink,
    isFavorite,
  } = artwork;

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
        userId,
        api_id: apiId,
        title,
        author,
        site_link: siteLink,
        img_link: imgLink,
        isFavorite,
      });
    } else {
      console.log('Delete');
      // FIXME: UserID should be pass dynamically
      removeArtworkFromFavorites(removeArtworkFromUser, {
        user_id: userId,
        api_id: apiId,
      });
    }
  };

  return (
    <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:w-1/3 bg-white border border-gray-200 shadow-md '>
      <div className='aspect-square'>
        <img
          src={imgLink}
          className='object-cover h-full w-full'
          alt='Artwork'
        />
      </div>
      {!isProfile && (
        <div className='p-5'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 truncate'>
            {title}
          </h5>
          <p className='mb-3 font-normal text-gray-700'>{author}</p>
          <div className='flex justify-between items-end'>
            <a
              href={siteLink}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300'
            >
              Go to site
            </a>
            {(!savingAtwork || !removingArtwork) && (
              <input
                type='checkbox'
                name='addToFavorites'
                id='addToFavorites'
                checked={checkedAsFavorite}
                onChange={toggleAddToFavorites}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export { ArtworkItem };
