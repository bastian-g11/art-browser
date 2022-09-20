import { useQuery } from '@apollo/client';
import { GET_USER_DATA } from '@graphql/client/queries/users';

const useGetProfileData = () => {
  const { data, loading } = useQuery(GET_USER_DATA, {
    variables: {
      // FIXME: Should be User ID
      getUserId: 'cl868tylr0076r8u68ql0q7zg',
    },
    fetchPolicy: 'cache-and-network',
  });

  return {
    user: data,
    isLoading: loading,
  };
};

export { useGetProfileData };
