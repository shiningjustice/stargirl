import React, { Component } from 'react'
import SignInForm from './SignInForm/SignInForm';
import './SignIn.css'

class SignIn extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  handleSignInSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/';
    history.push(destination);
  }

  render() {
    return (
      <section className="SignIn">
        <h1 className="header">Sign In</h1>
        <SignInForm
          onLoginSuccess={this.handleSignInSuccess}
        />
      </section>
    );
  }
}

export default SignIn;
