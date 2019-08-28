import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

class Fencing extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center"><i className="fas fa-align-justify fa-2x" /></h2>
        <h2 className="text-center"> Temporary Fencing</h2>
        <div class="container mt-4 services-text">
          <h3 className="text-center">Reduce liability and secure your site easily with temporary fencing from JEL.</h3>
          <h3 className="text-center"><Link to="/contact"> Contact Us to Learn More </Link></h3>
        </div>
      </div>
    )
  }
}

export default Fencing;
