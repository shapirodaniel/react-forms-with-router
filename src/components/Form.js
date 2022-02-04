import React from 'react';
import { Route } from 'react-router-dom';

export default class Form extends React.Component {
  render() {
    const {
      location: { pathname },
    } = this.props;

    console.log(pathname);
    console.log(this.props);

    return (
      <div>
        hey im the main character
        <Route
          path="/edit/cheeseburgers"
          render={() => <div>hi im a mini component :)</div>}
        />
      </div>
    );
  }
}
