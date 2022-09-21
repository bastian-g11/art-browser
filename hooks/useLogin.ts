import { useQuery } from '@apollo/client';
import { LOGIN } from '@graphql/client/queries/accounts';
import { useRouter } from 'next/router';
import { useToggleLoginContext } from 'providers/UserProvider';
import { Dispatch, SetStateAction } from 'react';

interface UseLoginProps {
  email: string;
  password: string;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setErrorMessage: Dispatch<SetStateAction<string>>;
}

const useLogin = () => {
  const { loading, refetch } = useQuery(LOGIN, {
    variables: {
      email: '',
      password: '',
    },
    skip: true,
    notifyOnNetworkStatusChange: true,
  });
  const router = useRouter();

  const { userLogin } = useToggleLoginContext();

  const login = async ({
    email,
    password,
    setIsLoading,
    setErrorMessage,
  }: UseLoginProps) => {
    const {
      data: { login: userData },
    } = await refetch({ email, password });
    if (userData) {
      userLogin({ id: userData.id, name: userData.name, email });
      router.push('/artworks');
    }
    setIsLoading(false);
    setErrorMessage('Email or password incorrect');
  };

  return {
    loading,
    login,
  };
};

export { useLogin };
