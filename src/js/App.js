import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'js/component/pages/Home';
import About from 'js/component/pages/About';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/About' component={About} />
      </Switch>
    </Router>
  );
}

export default App;
