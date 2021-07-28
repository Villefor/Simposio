import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login';
import notFound from './page/notFound';
import { Provider } from './context/Provider';
import './index.css';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/notFound" component={notFound} />
      </Switch>
    </Provider>
  );
}

export default App;
