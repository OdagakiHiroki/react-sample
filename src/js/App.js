import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { setStore, history } from 'js/storeSetting';
import Home from 'js/containers/home';
import About from 'js/containers/about';

const store = setStore();

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/About' component={About} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
