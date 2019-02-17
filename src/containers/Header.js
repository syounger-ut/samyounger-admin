import React, { Component } from 'react';

import Nav from '../components/Nav';
import '../styles/containers/Header.scss';

class Header extends Component {
  render() {
    const { email } = this.props;

    return (
      <header className="App-header">
      <p>Welcome, {email}</p>
      <Nav />
      </header>
    )
  }
}

export default Header;
