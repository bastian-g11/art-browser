import React, { useState, useContext, useCallback } from 'react';

const userContext = React.createContext(null);
const toggleLoginContext = React.createContext(() => null);

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
    ({ id, email, name }: UserContext) => {
      if (user) {
        setUser(null);
      } else {
        setUser({
          id,
          email,
          name,
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
