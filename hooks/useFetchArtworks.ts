import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getArtworks } from 'services/getArtworks';
import { GET_USER_FAVORITE_ARTWORKS_IN } from '@graphql/client/queries/users';
import { Artwork } from 'types';

const useFetchArtworks = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { data, loading, refetch } = useQuery(GET_USER_FAVORITE_ARTWORKS_IN, {
    variables: {
      // FIXME: Should be User ID
      getFavoriteArtworksInId: 'cl868tylr0076r8u68ql0q7zg',
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
    } = await refetch({ apiIds });

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
