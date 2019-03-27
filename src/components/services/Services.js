import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mainBanner from '../../images/main-banner.png';

class Services extends Component {
  render() {
    return (
      <div>
        <img src={mainBanner} alt="main-banner" className="img-fluid pb-3" style={{width: '100%'}}/>
        <h2 className="text-center">{' '}
          <i className="fas fa-wrench" /> Services
        </h2>
        <div className="row">
          <div className="col-md-3">
            <h3 className="text-center">
              <Link to="/dumpsters" className="font-weight-light">
                <i className="fas fa-dumpster" /> Dumpsters
              </Link>
            </h3>
          </div>
          <div className="col-md-3">
          <h3 className="text-center">
            <Link to="/storage" className="font-weight-light">
              <i className="fas fa-box" /> Storage Containers
            </Link>
          </h3>
          </div>
          <div className="col-md-3">
          <h3 className="text-center">
            <Link to="/portable-toilets" className="font-weight-light">
              <i className="fas fa-toilet" /> Portable Toilets
            </Link>
          </h3>
          </div>
          <div className="col-md-3">
          <h3 className="text-center">
            <Link to="/equipment-rental" className="font-weight-light">
              <i className="fas fa-hard-hat" /> Equipment Rental
            </Link>
          </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h3 className="text-center">
              <Link to="/debris-removal" className="font-weight-light">
                <i className="fas fa-trash-restore-alt" /> Debris Removal
              </Link>
            </h3>
          </div>
          <div className="col-md-4">
            <h3 className="text-center">
              <Link to="/recycling" className="font-weight-light">
                <i className="fas fa-recycle" /> Recycling Services
              </Link>
            </h3>
          </div>
          <div className="col-md-4">
            <h3 className="text-center">
              <Link to="/fencing" className="font-weight-light">
                <i className="fas fa-torii-gate" /> Temporary Fencing
              </Link>
            </h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Services;
