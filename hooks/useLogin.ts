import { useQuery } from '@apollo/client';
import { LOGIN } from '@graphql/client/queries/accounts';
import { useRouter } from 'next/router';
import { useToggleLoginContext, useUserContext } from 'providers/UserProvider';

interface UseLoginProps {
  email: string;
  password: string;
}

const useLogin = () => {
  const { refetch } = useQuery(LOGIN, {
    variables: {
      email: '',
      password: '',
    },
    skip: true,
    fetchPolicy: 'cache-and-network',
  });
  const router = useRouter();

  const toggleLogin = useToggleLoginContext();

  const login = async ({ email, password }: UseLoginProps) => {
    const {
      data: { login: userData },
    } = await refetch({ email, password });

    if (userData) {
      toggleLogin({ id: userData.id, name: userData.name, email });
      router.push('/artworks');
    }
  };

  return {
    login,
  };
};

export { useLogin };
