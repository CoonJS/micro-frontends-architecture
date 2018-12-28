import React, { Component, Fragment } from 'react';

import { Link, Switch, Route, withRouter } from 'react-router-dom';

import './global.css';


import ServiceAPage from '../pages/service-a/Index.jsx';
import ServiceBPage from '../pages/service-b/Index.jsx';

@withRouter
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h1 style={{fontFamily: 'monospace', color: 'white'}}>MICRO FRONTENDS ARCHITECTURE</h1>
          <div style={{display: 'flex'}}>
            <div className="Link">
              <Link to="/">Home</Link>
            </div>
            <div className="Link">
              <Link to="/service-a">Service A</Link>
            </div>
            <div className="Link">
              <Link to="/service-b">Service B</Link>
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/service-a" component={ServiceAPage}/>
          <Route path="/service-b" component={ServiceBPage}/>
        </Switch>
      </Fragment>
    );
  }
};
