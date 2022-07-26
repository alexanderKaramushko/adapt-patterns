/* eslint-disable no-console */
import Store from './store';

export function component1(store: Store): void {
  console.log('в component1 передан синглтон Store', store);
}
