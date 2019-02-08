import React, { Component } from 'react';
import { Switch, Link, Route, withRouter } from 'react-router-dom';

import './global.css';

import HomePage from './pages/Home.jsx';
import CampaignPage from './pages/Campaign.jsx';

@withRouter
export default class App extends Component {

  constructor(props) {
    super(props);

    /** @type {Message}*/
    this.messageService = this.$locator.Message;

    this.state = {
      routes: [
        {
          title: 'Home',
          key: 'home',
          link: '/',
          component: HomePage
        },
        {
          title: 'Entities page',
          key: 'page-a',
          link: '/campaign',
          component: CampaignPage
        }
      ]
    };
  }

  componentDidMount() {
    const { history } = this.props;

    history.listen(location => {
      this.messageService.send({
        type: 'ROUTE',
        message: { location: location.pathname }
      });
    });

    this.messageService.onReceive(args => {

    });
  }

  renderRoutes() {
    const state = this.state;
    const { routes } = state;

    return routes.map(route => {
      const routeKey = `${route.key} ${route.title}`;
      return <Route exact key={routeKey} path={route.link} component={route.component}/>;
    });
  }

  renderMenuItems() {
    const state = this.state;
    const { routes } = state;

    return routes.map(route => {
      return (
        <Link to={route.link} key={route.key}>
          <div className="menu-item">{route.title}</div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className="layout">
        <div className="nav-menu">
          {this.renderMenuItems()}
        </div>
        <div className="page-container">
          <Switch>
            {this.renderRoutes()}
          </Switch>
        </div>
      </div>
    );
  }
};
