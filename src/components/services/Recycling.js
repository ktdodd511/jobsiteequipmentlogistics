import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

class Recycling extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center"><i className="fas fa-recycle" /> Recycling</h2>
        <div class="container mt-4 services-text">
          <h3 className="text-center">Customized waste & recycling plans for your projects. JEL can design a compliant waste plan for LEED, Calgreen or other green building initiatives.</h3>
          <h3 className="text-center"><Link to="/contact"> Contact Us to Learn More </Link></h3>
        </div>
      </div>
    )
  }
}

export default Recycling;
