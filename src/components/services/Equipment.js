import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

class Equipment extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center"><i className="fas fa-hard-hat" /> Equipment Rental</h2>
        <div class="container mt-4 services-text">
          <h3 className="text-center">From a single pallet jack to scissor lifts – if you need it we can get it.</h3>
          <h3 className="text-center"><Link to="/contact"> Contact Us to Learn More </Link></h3>
        </div>
      </div>
    )
  }
}

export default Equipment;
