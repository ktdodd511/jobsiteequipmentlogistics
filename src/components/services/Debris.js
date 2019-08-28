import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

class Debris extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center"><i className="fas fa-trash-restore-alt fa-2x" /></h2>
        <h2 className="text-center"> Debris Removal</h2>
        <div class="container mt-4 services-text">
          <h3 className="text-center">No room for a dumpster or not enough debris to justify a dumpster? JEL will send out a crew to remove your debris.</h3>
          <h3 className="text-center"><Link to="/contact"> Contact Us to Learn More </Link></h3>
        </div>
      </div>
    )
  }
}

export default Debris;
