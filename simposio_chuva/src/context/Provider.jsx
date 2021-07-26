import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import ChuvaContext from './Context'

function Provider({ children }) {

  const [newTopic, setTopic] = useState('')
  const contextValue = {
    newTopic,
    setTopic
  }

  return (
    <ChuvaContext.Provider value={ contextValue }>
      {children}
    </ChuvaContext.Provider>
  );
};
export default Provider;