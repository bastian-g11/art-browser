import { useMutation, useQuery } from '@apollo/client';
import { ADD_ARTWORK_TO_USER } from '@graphql/client/mutations/users';
import { useState } from 'react';
import { Artwork, ErrorResponse } from 'types';
// import Image from 'next/image';

const ArtworkItem = ({
  api_id,
  title,
  author,
  site_link,
  img_link,
  isFavorite,
}: Artwork) => {
  const [addArtworkToUser, { loading }] = useMutation(ADD_ARTWORK_TO_USER);
  const [checkedAsFavorite, setCheckedAsFavorite] = useState(isFavorite);

  const addToFavorites = async event => {
    console.log('Add to favorite', event.target.value);

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

  // if (loading) return <div>Loading...</div>;

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

      <input
        type='checkbox'
        name='addToFavorites'
        id='addToFavorites'
        onClick={addToFavorites}
      />
    </div>
  );
};
export { ArtworkItem };
