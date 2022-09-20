/* eslint-disable @next/next/no-img-element */
import { useMutation } from '@apollo/client';
import { ChangeEventHandler, useState } from 'react';
import {
  ADD_ARTWORK_TO_USER,
  REMOVE_ARTWORK_FROM_USER,
} from '@graphql/client/mutations/users';
import { Artwork } from 'types';
import { addToFavorites, removeFromFavorites } from 'helpers';

const ArtworkItem = ({
  artwork,
  userId,
  isProfile = false,
}: {
  artwork: Artwork;
  isProfile: boolean;
  userId: string;
}) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { api_id, title, author, site_link, img_link, isFavorite } = artwork;

  const [checkedAsFavorite, setCheckedAsFavorite] = useState(isFavorite);

  const [addArtworkToUser, { loading: savingAtwork }] = useMutation(
    ADD_ARTWORK_TO_USER
  );
  const [removeArtworkFromUser, { loading: removingArtwork }] = useMutation(
    REMOVE_ARTWORK_FROM_USER
  );

  const toggleAddToFavorites = async (
    event: ChangeEventHandler<HTMLInputElement>
  ) => {
    const maskedAsFavorite = event.target.checked;

    setCheckedAsFavorite(maskedAsFavorite);
    if (maskedAsFavorite) {
      addToFavorites({
        userId,
        addArtworkToUser,
        artwork,
      });
    } else {
      removeFromFavorites({ userId, api_id, removeArtworkFromUser });
    }
  };

  return (
    <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:w-1/3 bg-white border border-gray-200 shadow-md '>
      <div className='aspect-square'>
        <img
          src={img_link}
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
              href={site_link}
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
