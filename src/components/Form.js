import React from 'react';

export default class Form extends React.Component {
  render() {
    const {
      location: { pathname },
    } = this.props;

    console.log(pathname);

    return <div>hi im a form</div>;
  }
}
