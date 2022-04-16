/**
 * @example Рассылка события клика по окну всем слушателям.
 */

import Observable from '.';

const observable = new Observable<Log>();

observable.subscribe(logToConsole);
observable.subscribe(logToDOM);

window.addEventListener('click', () => {
  observable.notify({ message: 'Window clicked!' });
});
