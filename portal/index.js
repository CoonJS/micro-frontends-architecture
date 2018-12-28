import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import App from './src/App.jsx';
import locator from './locator';

Component.prototype.$locator = locator;
const messageService = Component.prototype.$locator.Message;

window.addEventListener('message', e => messageService.handler(e), false);

render(
  <Router>
    <App/>
  </Router>,
  document.getElementById('app')
);
