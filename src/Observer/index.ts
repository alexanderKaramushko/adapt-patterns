/**
 * @description Паттерн observer можно использовать
 * для того, чтобы уменьшить степень связности компонентов,
 * не прибегая к "тяжеловесным" хранилищам состояний.
 * Это можно рассматривать как просто события без болшой нагрузки данными.
 */

type Observer<Payload> = (payload: Payload) => void;

class Observable<Payload extends { [key: string]: unknown }> {

  observers: Observer<Payload>[] = [];

  subscribe(observer: Observer<Payload>): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer<Payload>): void {
    this.observers.filter((o) => o !== observer);
  }

  notify(payload: Payload): void {
    this.observers.forEach((observer) => observer(payload));
  }

}

export default Observable;
