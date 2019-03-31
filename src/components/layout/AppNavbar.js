import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/jelLogo.jpeg';



class AppNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img id="logo" src={Logo} alt="Logo" /> {' '}
            Jobsite Equipment Logistics
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMain">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMain">

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <div className="dropdown">
                <a className="btn btn-primary dropdown-toggle nav-link" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Services
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <Link to="/dumpsters" className="dropdown-item">Dumpsters</Link>
                  <Link to="/storage" className="dropdown-item">Storage Containers</Link>
                  <Link to="/portable-toilets" className="dropdown-item">Portable Toilets</Link>
                  <Link to="/equipment-rental" className="dropdown-item">Equipment Rental</Link>
                  <Link to="/debris-removal" className="dropdown-item">Debris Removal</Link>
                  <Link to="/recycling" className="dropdown-item">Recycling Services</Link>
                  <Link to="/fencing" className="dropdown-item">Temporary Fencing</Link>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default AppNavbar;
