import { makeObservable } from './interfaces';

export class Counter {

  value = 1;

  constructor() {
    makeObservable(this);
  }

}

export default new Counter();
