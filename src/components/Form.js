import React from 'react';
import { formData } from '../util/data';
import { FormContainer } from '../layout';

const initFormState = { firstName: '', lastName: '', password: '' };
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...initFormState };
  }

  componentDidMount() {
    const {
      location: { pathname },
    } = this.props;

    console.log(pathname);
    console.log(this.state);
  }

  componentDidUpdate(prevProps) {
    const {
      location: { pathname },
    } = this.props;

    if (prevProps.location.pathname !== this.props.location.pathname) {
      const update =
        pathname.slice(1) === 'edit' ? formData : { ...initFormState };

      this.setState(update);
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    console.log({ formDataToBeSent: this.state });
  }

  render() {
    return (
      <FormContainer onSubmit={(e) => this.handleSubmit(e)}>
        <div>
          <label htmlFor={'firstName'}>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor={'firstName'}>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor={'password'}>Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <input type="submit" value="Sign Me Up!" />
      </FormContainer>
    );
  }
}
