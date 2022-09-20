import { useQuery } from '@apollo/client';
import { GET_USER_DATA } from '@graphql/client/queries/users';
import { useUserContext } from 'providers/UserProvider';
import { useState, useEffect } from 'react';

const useGetProfileData = () => {
  const user = useUserContext();
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  const { isLoading, refetch } = useQuery(GET_USER_DATA, {
    variables: {
      getUserId: '',
    },
    skip: true,
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    const getData = async () => {
      console.log('ID SENT', user.id);

      const { data } = await refetch({ getUserId: user.id });
      console.log(
        '🚀 ~ file: useGetProfileData.ts ~ line 21 ~ getData ~ data',
        data
      );

      // setArtworks(mappedArtworks);
    };

    getData();
  }, [user]);

  return {
    artworks,
    isLoading,
  };
};

export { useGetProfileData };
