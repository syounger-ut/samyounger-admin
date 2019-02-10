import React, { Component } from 'react';
import '../styles/Nav.scss';

class Nav extends Component {
  render() {
    return (
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/foo">Foo</a></li>
            <li><a href="/bar">Bar</a></li>
          </ul>
        </nav>
    )
  }
}

export default Nav;
