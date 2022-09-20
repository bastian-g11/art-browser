import React, { useState, useContext, useCallback } from 'react';

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

  const toggleLogin = useCallback(
    (userData: UserContext): void => {
      console.log('Entra');
      if (user) {
        setUser(null);
      } else {
        setUser({
          id: userData?.id,
          email: userData?.email,
          name: userData?.name,
        });
      }
    },
    [user]
  );

  return (
    <userContext.Provider value={user}>
      <toggleLoginContext.Provider value={toggleLogin}>
        {children}
      </toggleLoginContext.Provider>
    </userContext.Provider>
  );
};

export { UserProvider, useUserContext, useToggleLoginContext };
