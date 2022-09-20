import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getArtworks } from 'services/getArtworks';
import { useUserContext } from 'providers/UserProvider';
import { GET_USER_FAVORITE_ARTWORKS_IN } from '@graphql/client/queries/users';
import { Artwork } from 'types';

const useFetchArtworks = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const user = useUserContext();

  const { refetch } = useQuery(GET_USER_FAVORITE_ARTWORKS_IN, {
    variables: {
      getFavoriteArtworksInId: '',
      apiIds: [''],
    },
    skip: true,
    fetchPolicy: 'cache-and-network',
  });

  // TODO: Pass in page number as args and isSearch to reset the images displayed
  const search = async (query: string) => {
    setIsLoading(true);
    const fetchedArtworks = await getArtworks(query);

    const mappedArtworks = await setFavoriteArtworks(
      fetchedArtworks.artworks,
      fetchedArtworks.apiIds
    );

    // FIXME: With pagination do [...artworks, images]
    setArtworks(mappedArtworks);
    setIsLoading(false);
  };

  const setFavoriteArtworks = async (
    fetchedArtworks: Artwork[],
    apiIds: string[]
  ) => {
    const {
      data: { getFavoriteArtworksIn },
    } = await refetch({ getFavoriteArtworksInId: user.id, apiIds });

    const favArtworksApiIds = getFavoriteArtworksIn.map(
      (artwork: Artwork) => artwork.api_id
    );

    return fetchedArtworks.map((artwork: Artwork) => {
      const mappedArtwork = { ...artwork };

      if (favArtworksApiIds.includes(artwork.api_id)) {
        mappedArtwork.isFavorite = true;
      }

      return mappedArtwork;
    });
  };

  return {
    artworks,
    isLoading,
    search,
  };
};

export { useFetchArtworks };
