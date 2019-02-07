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
        <div style={{display: 'flex', alignItems: 'center', backgroundColor: '#333', padding: '16px 32px'}}>
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
        <Switch>
          <Route path="/service-b" component={ServiceBPage}/>
          <Route path="/service-a" component={ServiceAPage}/>
        </Switch>
      </Fragment>
    );
  }
};
