/**
 * @description Паттерн mediator уменьшает связность модулей между собой.
 * Похож на паттерн observer, но является больше центром доп. логики, чем рассылкой событий.
 */

interface Payload<Data> {
  data: Data;
}

interface Channel<Data> {
  context: any;
  callback: (payload: Payload<Data>) => void;
}

class Mediator<Data> {

  channels: { [key: string ]: Channel<Data>[] } = {};

  subscribe(channel: string, fn: (payload: Payload<Data>) => void): this {
    if (!this.channels[channel]) {
      this.channels[channel] = [];
      this.channels[channel] = [...this.channels[channel], {
        callback: fn,
        context: this,
      }];
    }

    return this;
  }

  publish(channel: string, payload: Payload<Data>): this {
    if (this.channels[channel]) {
      this.channels[channel].forEach((subscription) => {
        subscription.callback.call(subscription.context, payload);
      });
    }

    return this;
  }

}

export default Mediator;
