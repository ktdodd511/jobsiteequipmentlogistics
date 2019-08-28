import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

class Portable extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center"><i className="fas fa-restroom fa-2x" /></h2>
        <h2 className="text-center"> Portable Toilets</h2>
        <div class="container mt-4 services-text">
          <h3 className="text-center">From basic construction units to fully-functional comfort stations, we can help.</h3>
          <h3 className="text-center"><Link to="/contact"> Contact Us to Learn More </Link></h3>
        </div>
      </div>
    )
  }
}

export default Portable;
