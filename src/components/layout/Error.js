import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Error extends Component {
  render() {
    return (
      <div className="text-center">
        <i className="fas fa-exclamation-circle fa-10x"></i>
        <h2 className="text-center">Sorry, that page doesn&#39;t seem to exist.</h2>
        <h3 className="text-center">
          <Link to="/">
            <i className="fas fa-chevron-left" />{' '}
              Back to Home
          </Link>
        </h3>
      </div>
    )
  }
}

export default Error;
