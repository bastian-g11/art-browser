import { useQuery } from '@apollo/client';
import { GET_USER_DATA } from '@graphql/client/queries/users';
import { useUserContext } from 'providers/UserProvider';

const useGetProfileData = () => {
  const user = useUserContext();
  const { data, loading } = useQuery(GET_USER_DATA, {
    variables: {
      getUserId: user.id,
    },
    fetchPolicy: 'cache-and-network',
  });

  return {
    user,
    artworks: data.getUser.artworks,
    isLoading: loading,
  };
};

export { useGetProfileData };
