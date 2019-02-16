import React, { Component } from 'react';

import '../styles/containers/Login.scss';
import { loginUser } from '../apis/samyounger';

import LoginForm from '../components/LoginForm';
import Error from '../components/Error';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false
    };
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(user) {
    loginUser(user).then(
      (result) => {
        this.props.setLoggedIn(result.user.email);
        this.props.history.push("/");
      },
      (error) => {
        this.setState({
          error: error,
          isLoaded: true
        })
      }
    )
  }

  render() {
    const { error, isLoaded } = this.state;

    if(error) {
      return (
        <div>
          <LoginForm submitForm={this.submitForm} />
          <Error error={error.message} />
        </div>
      )
    } else if(isLoaded) {
      return (<h1>Loading...</h1>)
    } else {
      return (
        <LoginForm submitForm={this.submitForm} />
      )
    }
  }
}

export default Login;
