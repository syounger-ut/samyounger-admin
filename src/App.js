import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { authenticateToken } from './apis/samyounger';

import Nav from "./containers/Nav";
import Home from "./containers/Home";
import Photos from "./containers/Photos";
import Login from "./containers/Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      loggedIn: false,
      error: null
    };
    this.setLoggedIn = this.setLoggedIn.bind(this);
  }

  componentWillMount() {
    const token = localStorage.getItem("auth_token");
    if(token) {
      authenticateToken(token).then(
        (result) => {
          this.setState({
            loggedIn: true,
            email: result.user.email
          })
        },
        (error) => {
          this.redirectToLogin();
        }
      )
    } else {
      this.redirectToLogin();
    }
  }

  redirectToLogin() {
    if(window.location.pathname !== "/login") {
      window.location.replace("/login");
    }
  }

  setLoggedIn(email) {
    this.setState({
      loggedIn: true,
      email: email
    });
  }

  render() {
    const { email, loggedIn } = this.state;

    let nav;
    if (loggedIn) {
      nav = (
        <Route render={props => <Nav email={email} {...props} />} />
      );
    }

    return (
      <Router>
        <div className="App">
          {nav}
          <Route exact path="/" component={Home} />
          <Route exact path="/photos" component={Photos} />
          <Route exact path="/login" render={props => <Login setLoggedIn={this.setLoggedIn} {...props} />} />
        </div>
      </Router>
    );
  }
}

export default App;
