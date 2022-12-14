/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @next/next/no-img-element */
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import {
  ADD_ARTWORK_TO_USER,
  REMOVE_ARTWORK_FROM_USER,
} from '@graphql/client/mutations/users';
import { Artwork } from 'types';
import { addToFavorites, removeFromFavorites } from 'helpers';
import { ArtworkModal } from 'components/ArtworkModal';

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
  const [modalIsOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [addArtworkToUser, { loading: savingAtwork }] = useMutation(
    ADD_ARTWORK_TO_USER
  );
  const [removeArtworkFromUser, { loading: removingArtwork }] = useMutation(
    REMOVE_ARTWORK_FROM_USER
  );

  const toggleAddToFavorites = () => {
    if (!checkedAsFavorite) {
      addToFavorites({
        userId,
        addArtworkToUser,
        artwork,
      });
    } else {
      removeFromFavorites({ userId, api_id, removeArtworkFromUser });
    }

    setCheckedAsFavorite(!checkedAsFavorite);
  };

  return (
    <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:w-1/3 bg-white border border-gray-200 shadow-md '>
      <div
        className={`aspect-square ${isProfile ? 'hover:cursor-pointer' : ''}`}
        onClick={isProfile ? openModal : undefined}
      >
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
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
              <div
                onClick={toggleAddToFavorites}
                className='hover:cursor-pointer'
              >
                {checkedAsFavorite ? (
                  <img
                    src='/icons/filled-bookmark.svg'
                    alt='bookmark checked'
                    className='h-8'
                  />
                ) : (
                  <img
                    src='/icons/bookmark.svg'
                    alt='bookmark unchecked'
                    className='h-8'
                  />
                )}
              </div>
            )}
          </div>
        </div>
      )}
      <ArtworkModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        artwork={artwork}
      />
    </div>
  );
};
export { ArtworkItem };
