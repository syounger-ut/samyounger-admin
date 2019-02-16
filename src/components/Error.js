import React, { Component } from "react";

class Error extends Component {
  render() {
    const error = this.props.error;
    return (
      <div className="error">Error: {error}</div>
    )
  }
}

export default Error;
