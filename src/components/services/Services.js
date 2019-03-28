import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mainBanner from '../../images/atlanta.png';
import './Services.css'

class Services extends Component {
  render() {
    return (
      <div className="mt-5">
        <div className="row m-4">
          <div className="col-md-3 services">
            <h3 className="text-center p-2">
              <Link to="/dumpsters" className="font-weight-light">
                <i className="fas fa-dumpster fa-4x" />
              </Link>
            </h3>
            <h3 className="text-center p-2">
              <Link to="/dumpsters" className="font-weight-light">
                Dumpsters
              </Link>
            </h3>
          </div>
          <div className="col-md-3 services">
          <h3 className="text-center p-2">
            <Link to="/storage" className="font-weight-light">
              <i className="fas fa-box fa-4x" />
            </Link>
          </h3>
          <h3 className="text-center p-2">
            <Link to="/storage" className="font-weight-light">
              Storage Containers
            </Link>
          </h3>
          </div>
          <div className="col-md-3 services">
          <h3 className="text-center p-2">
            <Link to="/portable-toilets" className="font-weight-light">
              <i className="fas fa-toilet fa-4x" />
            </Link>
          </h3>
          <h3 className="text-center p-2">
            <Link to="/portable-toilets" className="font-weight-light">
              Portable Toilets
            </Link>
          </h3>
          </div>
          <div className="col-md-3 services">
          <h3 className="text-center p-2">
            <Link to="/equipment-rental" className="font-weight-light">
              <i className="fas fa-hard-hat fa-4x" />
            </Link>
          </h3>
          <h3 className="text-center p-2">
            <Link to="/equipment-rental" className="font-weight-light">
              Equipment Rental
            </Link>
          </h3>
          </div>
        </div>
        <div className="row m-4">
          <div className="col-md-4 services">
            <h3 className="text-center p-2">
              <Link to="/debris-removal" className="font-weight-light">
                <i className="fas fa-trash-restore-alt fa-4x" />
              </Link>
            </h3>
            <h3 className="text-center p-2">
              <Link to="/debris-removal" className="font-weight-light">
                Debris Removal
              </Link>
            </h3>
          </div>
          <div className="col-md-4 services">
            <h3 className="text-center p-2">
              <Link to="/recycling" className="font-weight-light">
                <i className="fas fa-recycle fa-4x" />
              </Link>
            </h3>
            <h3 className="text-center p-2">
              <Link to="/recycling" className="font-weight-light">
                Recycling Services
              </Link>
            </h3>
          </div>
          <div className="col-md-4 services">
            <h3 className="text-center p-2">
              <Link to="/fencing" className="font-weight-light">
                <i className="fas fa-align-justify fa-4x" />
              </Link>
            </h3>
            <h3 className="text-center p-2">
              <Link to="/fencing" className="font-weight-light">
                Temporary Fencing
              </Link>
            </h3>
          </div>
        </div>
        <h1 className="text-center">{' '}
          <i className="fas fa-tools mt-5" /> What We Do <i className="fas fa-tools" />
        </h1>
        <div className="row m-5">
          <div className="col-md-12 p-3">
            <h3 className="text-center">JEL works with national contractors and retailers to simplify how they order dumpsters, containers and equipment for special projects, construction and rollouts.</h3>
          </div>
        </div>
        <div className="row m-5">
          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item list-group-item-primary text-center"><h4>THINGS WE DO:</h4></li>
              <li className="list-group-item list-group-item-secondary text-center"><h5>Provide one service agreement for all jobs</h5></li>
              <li className="list-group-item list-group-item-secondary text-center"><h5>Anticipate needs, make suggestions & solve problems</h5></li>
              <li className="list-group-item list-group-item-secondary text-center"><h5>Prompt and accurate invoices</h5></li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item list-group-item-primary text-center"><h4>THINGS WE DO <i>NOT</i> DO:</h4></li>
              <li className="list-group-item list-group-item-secondary text-center"><h5>Require contracts & credit applications for each new job</h5></li>
              <li className="list-group-item list-group-item-secondary text-center"><h5>React indifferently to problems</h5></li>
              <li className="list-group-item list-group-item-secondary text-center"><h5>Late invoices full of hidden fees & surcharges</h5></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Services;
