import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitForm(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <div><i className="fas fa-user"></i></div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            autoComplete="username"
            onChange={this.handleChange} />
        </div>
        <div>
          <div><i className="fas fa-unlock"></i></div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="current-password"
            onChange={this.handleChange} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default LoginForm;
