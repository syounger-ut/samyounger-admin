import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./containers/Home";
import Photos from "./containers/Photos";
import Login from "./containers/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/photos" component={Photos} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
