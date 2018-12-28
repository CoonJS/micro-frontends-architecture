import EventEmitter from 'events';

const eventEmitter = new EventEmitter();

export default class Message {
  constructor() {
    this.name = 'Message';

    this.url = 'http://localhost:3000';
    this.messageTypes = [
      'ROUTE',
      'NOTIFICATION',
      'MESSAGE'
    ];
  }

  send({type ='MESSAGE', message = {}, params = {}}) {
    if (!this.messageTypes.includes(type)) {
      throw new Error(`Type:${type} does not support for this service, use one of ${this.messageTypes.join(', ')} instead`);
    }

    parent.postMessage({ type, message, params }, this.url);
  }

  handler(event) {
    const isValidMessage = event.origin === this.url && this.messageTypes.includes(event.data.type);

    if (isValidMessage) {
      eventEmitter.emit('message', { type: event.data.type, data: event.data.message });
    }
  }

  onReceive(cb) {
    eventEmitter.on('message', args => cb(args));
  }

}
