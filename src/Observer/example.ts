/**
 * @example Рассылка события клика по окну всем слушателям.
 */

import Observable from '.';

type Log = { message: string };

const observable = new Observable<Log>();

function logToConsole(log: Log): void {
  // eslint-disable-next-line no-console
  console.log(log);
}

function logToDOM(log: Log): void {
  document.body.insertAdjacentHTML('beforeend', `
    <div>${log.message}</div>
  `);
}

observable.subscribe(logToConsole);
observable.subscribe(logToDOM);

window.addEventListener('click', () => {
  observable.notify({ message: 'Window clicked!' });
});
