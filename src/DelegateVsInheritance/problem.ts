/**
 * @description Наследование увеличивает связность кода.
 * Дочерние классы начинают зависеть от родительских.
 * Дочерний класс потенциально получит доступ к методам и свойствам, которые не нужны в нем.
 */

class Parent {
  /** Изменение названия value приведет к неправильной работе в дочернем классе Child */
  protected value: unknown | null = null;

  changeSomeProperty(newValue: unknown): void {
    this.value = newValue;
  }
}

export class Child extends Parent {
  readValue(): void {
    /** Обращение к родительскому свойству value приводит к связности кода */
    console.log(`reading ${this.value}`);
  }
}

const child = new Child();

child.readValue();
