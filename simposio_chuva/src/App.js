import React from 'react';
import Home from './page/Home';
import Provider from './context/Provider';

function App() {
  return (
    <main>
      <Provider>
        <Home />
      </Provider>
    </main>
  );
}


export default App;
