import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Nav, Form } from './';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/new" component={Form} />
        <Route path="/edit" component={Form} />
      </Switch>
    </Router>
  );
}

export default App;
