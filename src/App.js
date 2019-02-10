import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from './components/Nav';
import Home from "./components/Home";
import Foo from "./components/Foo";
import Bar from "./components/Bar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Nav/>
          </header>
          <Route exact path="/" component={Home} />
          <Route exact path="/foo" component={Foo} />
          <Route path="/bar" component={Bar} />
        </div>
      </Router>
    );
  }
}

export default App;
