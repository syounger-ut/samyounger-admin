import React, { Component } from 'react';

import { getUser } from '../apis/samyounger';

import Header from "./Header";
import Error from '../components/Error';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      error: null
    };
  }

  componentWillMount() {
    getUser().then(
      (result) => {
        this.setState({
          email: result.email
        })
      },
      (error) => {
        const self = this;
        if (error.response.status === 401) {
          self.props.history.push("/login")
        } else {
          this.setState({ error: error })
        }
      }
    )
  }

  render() {
    const { email, error } = this.state;

    if(error) {
      return (
        <div>
          <Error error={error.message} />
          Home
        </div>
      )
    } else {
      return (
        <div>
          <Header email={email} />
          Home
        </div>
      )
    }
  }
}

export default Home;
