/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */
/**
 * @description Паттерн делегирования устаняет высокую связность путем создания
 * доп. класса, который делегирует работу своих методов на переданный класс.
 * Сохраняется полиморфность и устраняется высокая связность.
 */

interface ParentModel {
  changeSomeProperty(newValue: unknown): void;
  value: unknown | null;
}

class Parent implements ParentModel {

  /** Изменение названия value приведет к неправильной работе ТОЛЬКО в классе-делегаторе */
  private _value: unknown | null = null;

  changeSomeProperty(newValue: unknown): void {
    this._value = newValue;
  }

  get value(): unknown | null {
    return this._value;
  }

}

class Delegator {

  private delegateTo!: ParentModel;

  constructor(delegateTo: ParentModel) {
    this.delegateTo = delegateTo;
  }

  readValue(): void {
    console.log(`reading ${this.delegateTo.value}`);
  }

}

const delegator = new Delegator(new Parent());

delegator.readValue();
