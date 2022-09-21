/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useContext, useEffect } from 'react';

interface UserContext {
  id: string;
  email: string;
  name: string;
}
interface UserProviderProps {
  children: React.ReactNode;
}

const userContext = React.createContext({});
const toggleLoginContext = React.createContext(() => null);

const useUserContext = () => useContext(userContext);
const useToggleLoginContext = () => useContext(toggleLoginContext);

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserContext | null>();

  const userLogin = (userData: UserContext): void => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser({
      id: userData?.id,
      email: userData?.email,
      name: userData?.name,
    });
  };

  const userLogout = (): void => {
    if (user) {
      setUser(null);
      localStorage.removeItem('user');
    }
  };

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user') as string);

    if (savedUser) {
      userLogin(savedUser);
    }
  }, []);

  return (
    // @ts-ignore
    <userContext.Provider value={user}>
      {/* @ts-ignore */}
      <toggleLoginContext.Provider value={{ userLogin, userLogout }}>
        {children}
      </toggleLoginContext.Provider>
    </userContext.Provider>
  );
};

export { UserProvider, useUserContext, useToggleLoginContext };
