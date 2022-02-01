import React, { createContext } from 'react';
import P from 'prop-types';
import { useAuth } from '../hooks/useAuth';

const Context = createContext();

function AuthProvider({ children }) {
  const { authenticated, handleLogin, unAuth } = useAuth();

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <Context.Provider value={{ authenticated, handleLogin, unAuth }}>
      {children}
    </Context.Provider>
  );
}

AuthProvider.propTypes = {
  children: P.node.isRequired,
};

export { Context, AuthProvider };
