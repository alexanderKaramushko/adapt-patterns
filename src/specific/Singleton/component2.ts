/* eslint-disable no-console */
import Store from './store';

export function component2(store: Store): void {
  console.log('в component2 передан синглтон Store', store);
}
