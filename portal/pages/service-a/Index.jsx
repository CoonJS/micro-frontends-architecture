import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

@withRouter
export default class Index extends Component {
  constructor(props) {
    super(props);

    /** @type {Message}*/
    this.messageService = this.$locator.Message;

    this.currentRoute = this.props.location.pathname.split('service-a/')[1];
  }

  componentDidMount() {
    const { history } = this.props;

    this.messageService.onReceive(params => {
      const { type, data: { location } } = params;

      if (type === 'ROUTE') {
        history.push('/service-a' + location);
      }
    });
  }

  render() {
    return (
      <iframe id="service-a" src={`/service-a/#/${this.currentRoute || ''}`} frameBorder="0" style={{width: '100%', height: '100%'}}/>
    );
  }
}

