import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Nav, Form, TokenVisualizer } from './';

function App() {
  const token = 'hi_im_a_token';

  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/new" component={Form} />
        <Route path="/edit" component={Form} />
        <Route
          path="/token-visualizer"
          render={(routeProps) => (
            <TokenVisualizer token={token} {...routeProps} />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
