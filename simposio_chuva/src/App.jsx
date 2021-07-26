import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login';
import { Provider } from './context/Provider';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Home" component={Home} />
      </Switch>
    </Provider>
  );
}

export default App;
