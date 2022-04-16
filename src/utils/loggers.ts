export type Log = { message: string };

export function logToConsole(log: Log): void {
  // eslint-disable-next-line no-console
  console.log(log);
}

export function logToDOM(log: Log): void {
  document.body.insertAdjacentHTML('beforeend', `
    <div>${log.message}</div>
  `);
}
