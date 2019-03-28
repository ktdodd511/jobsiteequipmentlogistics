import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Contact extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <h1 className="text-center">Contact Us</h1>
          <h2><i className="fas fa-envelope-open"/>{' '}<i className="fas fa-address-book"/>{' '}<i className="fas fa-phone"/>{' '}<i className="fas fa-mobile"/></h2>
        </div>
        <div className="container contact-container">
          <div className="row contact">
            <div className="col-md-12 m-3">
              <h3><b>New Customers</b></h3>
              <h4>Would you like JEL to work for you? We are ready to hear from you.</h4>
              <h4><a href="mailto:info@gojel.com">info@gojel.com</a> or 770-842-2489</h4>
            </div>
          </div>
          <div className="row contact">
            <div className="col-md-12 m-3">
              <h3><b>Accounts Payable</b></h3>
              <h4>Need to submit an invoice or check on a payment?</h4>
              <h4><a href="mailto:ap@gojel.com">ap@gojel.com</a></h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
