import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getArtworks } from 'services/getArtworks';
import { GET_USER_FAVORITE_ARTWORKS_IN } from '@graphql/client/queries/users';

const useFetchArtworks = () => {
  const [artworks, setArtworks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { data, loading, refetch } = useQuery(GET_USER_FAVORITE_ARTWORKS_IN, {
    variables: {
      getFavoriteArtworksInId: 'cl868tylr0076r8u68ql0q7zg',
      apiIds: ['en-RP-P-BI-2140', 'en-RP-P-OB-22.048(R)'],
    },
    skip: true,
    fetchPolicy: 'cache-and-network',
  });

  // TODO: Pass in page number as args and isSearch to reset the images displayed
  const search = async (query: string) => {
    setIsLoading(true);
    const fetchedArtworks = await getArtworks(query);

    const favoriteArtworks = await refetch();
    console.log(
      '🚀 ~ file: useFetchArtworks.ts ~ line 25 ~ search ~ favoriteArtworks',
      favoriteArtworks
    );

    // FIXME: With pagination do [...artworks, images]
    setArtworks(fetchedArtworks);
    setIsLoading(false);
  };

  return {
    artworks,
    isLoading,
    search,
  };
};

export { useFetchArtworks };
