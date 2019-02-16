import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/containers/Nav.scss';

class Nav extends Component {
  render() {
    const email = this.props.email;
    return (
      <header className="App-header">
        <nav>
          <ul>
            <p>Welcome, {email}</p>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/photos">Photos</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Nav;
