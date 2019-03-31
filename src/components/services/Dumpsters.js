import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

class Dumpsters extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center"><i className="fas fa-dumpster fa-2x" /> Dumpsters</h2>
        <div class="container mt-4 services-text">
          <h3 className="text-center">From a single dumpster for a short term project to planning a national rollout, we can help.</h3>
          <h3 className="text-center"><Link to="/contact"> Contact Us to Learn More </Link></h3>
        </div>
      </div>
    )
  }
}

export default Dumpsters;
