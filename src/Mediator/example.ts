/* eslint-disable prefer-arrow-callback */
/**
 * @example Рассылка события клика по окну всем слушателям.
 */

import Mediator from '.';
import { logToConsole, logToDOM } from '../utils';

type Message = string;

const mediator = new Mediator<Message>();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
mediator.subscribe('sendMessage', function onSendMessage(this: any, message) {
  // импорт и вызов функций модулей в центре обработки sendMessage
  logToConsole({ message: message.data });
  logToDOM({ message: message.data });
});

mediator.publish('sendMessage', { data: 'Hello!' });
