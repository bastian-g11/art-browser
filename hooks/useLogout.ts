import { useRouter } from 'next/router';
import { useToggleLoginContext } from 'providers/UserProvider';

const useLogout = () => {
  const router = useRouter();

  const { userLogout } = useToggleLoginContext();

  const logout = async () => {
    userLogout();
    router.push('/login');
  };

  return {
    logout,
  };
};

export { useLogout };
