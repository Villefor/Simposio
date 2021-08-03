import React, { useState, createContext } from 'react';
import { node } from 'prop-types';

const ChuvaContext = createContext();

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const contextValue = {
    email,
    setEmail,
  };

  return (
    <ChuvaContext.Provider value={contextValue}>
      {children}
    </ChuvaContext.Provider>
  );
}

Provider.propTypes = {
  children: node,
}.isRequired;

export { Provider, ChuvaContext };
