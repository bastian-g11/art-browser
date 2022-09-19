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

  // if (loading) return <div>Loading...</div>;

  return (
    <div>
      {/* TODO: Should I use next image? */}
      {/* images: { */}
      {/* //   domains: ['lh3.googleusercontent.com'], */}
      {/* // }, */}
      {/* //   <Image src={webImage.url} alt='Artwork image' width={500} height={500} /> */}
      {(savingAtwork || removingArtwork) && <h1>Loading...</h1>}
      <img src={img_link} height='500' width='500' alt='Artwork' />
      <h1>{author}</h1>
      <p>{title}</p>
      <a href={site_link}>Link to the Rijksmuseum site</a>

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
  );
};
export { ArtworkItem };
