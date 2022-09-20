import React, { useState, useContext } from 'react';

const userContext = React.createContext(null);
const toggleLoginContext = React.createContext((user: object) => null);

const useUserContext = () => useContext(userContext);
const useToggleLoginContext = () => useContext(toggleLoginContext);

interface UserContext {
  id: string;
  email: string;
  name: string;
}
interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserContext | null>();

  const userLogin = (userData: UserContext): void => {
    console.log('Login');
    if (user) {
      setUser(null);
    } else {
      setUser({
        id: userData?.id,
        email: userData?.email,
        name: userData?.name,
      });
    }
  };

  const userLogout = (): void => {
    if (user) {
      setUser(null);
    }
  };

  return (
    <userContext.Provider value={user}>
      <toggleLoginContext.Provider value={{ userLogin, userLogout }}>
        {children}
      </toggleLoginContext.Provider>
    </userContext.Provider>
  );
};

export { UserProvider, useUserContext, useToggleLoginContext };
