import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mainBanner from '../../images/atlanta.png';
import './Services.css'

class Services extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center m-5">{' '}
          <i className="fas fa-wrench" /> Services
        </h2>
        <div className="row m-4">
          <div className="col-md-3 services">
            <h3 className="text-center p-2">
              <Link to="/dumpsters" className="font-weight-light">
                <i className="fas fa-dumpster" /> Dumpsters
              </Link>
            </h3>
          </div>
          <div className="col-md-3 services">
          <h3 className="text-center p-2">
            <Link to="/storage" className="font-weight-light">
              <i className="fas fa-box" /> Storage Containers
            </Link>
          </h3>
          </div>
          <div className="col-md-3 services">
          <h3 className="text-center p-2">
            <Link to="/portable-toilets" className="font-weight-light">
              <i className="fas fa-toilet" /> Portable Toilets
            </Link>
          </h3>
          </div>
          <div className="col-md-3 services">
          <h3 className="text-center p-2">
            <Link to="/equipment-rental" className="font-weight-light">
              <i className="fas fa-hard-hat" /> Equipment Rental
            </Link>
          </h3>
          </div>
        </div>
        <div className="row m-4">
          <div className="col-md-4 services">
            <h3 className="text-center p-2">
              <Link to="/debris-removal" className="font-weight-light">
                <i className="fas fa-trash-restore-alt" /> Debris Removal
              </Link>
            </h3>
          </div>
          <div className="col-md-4 services">
            <h3 className="text-center p-2">
              <Link to="/recycling" className="font-weight-light">
                <i className="fas fa-recycle" /> Recycling Services
              </Link>
            </h3>
          </div>
          <div className="col-md-4 services">
            <h3 className="text-center p-2">
              <Link to="/fencing" className="font-weight-light">
                <i className="fas fa-torii-gate" /> Temporary Fencing
              </Link>
            </h3>
          </div>
        </div>
        <div className="row m-5">
          <div className="col-md-12 p-3">
            <h4 className="text-center">JEL works with national contractors and retailers to simplify how they order dumpsters, containers and equipment for special projects, construction and rollouts.</h4>
          </div>
        </div>
        <div className="row m-5">
          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item text-center"><h4>THINGS WE DO:</h4></li>
              <li className="list-group-item text-center">Provide one service agreement for all jobs</li>
              <li className="list-group-item text-center">Anticipate needs, make suggestions & solve problems</li>
              <li className="list-group-item text-center">Prompt and accurate invoices</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item text-center"><h4>THINGS WE DO <i>NOT</i> DO:</h4></li>
              <li className="list-group-item text-center">Require contracts & credit applications for each new job</li>
              <li className="list-group-item text-center">React indifferently to problems</li>
              <li className="list-group-item text-center">Late invoices full of hidden fees & surcharges</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Services;
