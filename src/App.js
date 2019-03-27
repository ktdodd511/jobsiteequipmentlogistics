import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppNavbar from './components/layout/AppNavbar';
import MainPage from './components/services/Services';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar />
            <Switch>
              <Route exact path="/" component={MainPage}/>
            </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
