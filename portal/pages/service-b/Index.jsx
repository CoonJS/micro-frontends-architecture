import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

@withRouter
export default class Index extends Component {
  constructor(props) {
    super(props);

    /** @type {Message}*/
    this.messageService = this.$locator.Message;

    this.state = {
      currentRoute: this.props.location.pathname.split('service-b/')[1]
    };
  }

  componentDidMount() {
    const { history } = this.props;

    this.messageService.onReceive(params => {
      const { type, data: { location } } = params;

      if (type === 'ROUTE') {
        history.push('/service-b' + location);
      }
    });
  }

  render() {
    const { currentRoute } = this.state;

    return (
      <iframe id="service-b" src={`/service-b/#/${currentRoute || ''}`} frameBorder="0" style={{width: '100%', height: '100%'}}/>
    );
  }
}

