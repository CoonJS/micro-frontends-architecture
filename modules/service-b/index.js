import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';


import App from './src/App.jsx';
import locator from './locator';

Component.prototype.$locator = locator;
const messageService = Component.prototype.$locator.Message;

window.addEventListener('message', e => messageService.handler(e), false);

function displayMessage (evt) {
  if (evt.origin !== 'http://localhost:3000/service-b/' && evt.data.type === 'PORTAL_MESSAGE') {
    console.log('Send message from portal -' + JSON.stringify(evt.data));
  }
}

window.addEventListener("message", displayMessage, false);

render(
  <Router>
    <App/>
  </Router>,
  document.getElementById('app')
);
