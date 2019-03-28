import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import AppNavbar from './components/layout/AppNavbar';
import MainPage from './components/services/Services';
import Dumpsters from './components/services/Dumpsters';
import Storage from './components/services/Storage';
import Portable from './components/services/Portable';
import Equipment from './components/services/Equipment';
import Debris from './components/services/Debris';
import Recycling from './components/services/Recycling';
import Fencing from './components/services/Fencing';
import Contact from './components/contact/Contact';
import Error from './components/layout/Error';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar />
            <Switch>
              <Route exact path="/" component={MainPage}/>
              <Route exact path="/dumpsters" component={Dumpsters}/>
              <Route exact path="/storage" component={Storage}/>
              <Route exact path="/portable-toilets" component={Portable}/>
              <Route exact path="/equipment-rental" component={Equipment}/>
              <Route exact path="/debris-removal" component={Debris}/>
              <Route exact path="/recycling" component={Recycling}/>
              <Route exact path="/fencing" component={Fencing}/>
              <Route exact path="/contact" component={Contact}/>
              <Route component={Error} />
            </Switch>
        </div>
        <div class="footer-copyright text-center py-3 footer">
          © 2019 Copyright: Jobsite Equipment Logistics
        </div>
      </Router>
    );
  }
}

export default App;
