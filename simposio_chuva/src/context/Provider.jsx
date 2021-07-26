import React, { useState, createContext } from 'react';
import { node } from 'prop-types';

const ChuvaContext = createContext();

function Provider({ children }) {
  const [newTopic, setTopic] = useState('');
  const [email, setEmail] = useState('');
  const contextValue = {
    email,
    setEmail,
    newTopic,
    setTopic,
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
