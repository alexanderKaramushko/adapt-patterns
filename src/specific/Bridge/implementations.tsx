/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
import { ElementType } from 'react';
import { MacOSButton, WindowsButton } from './components';
import { UIComponents } from './interfaces';

/**
 * @description Реализация изменяется в зависимости от системы,
 * не затрагивая абстрактный слой
 */
export class MacOSUIComponents implements UIComponents {

  getButton(): ElementType {
    // здесь может быть доп. логика для MacOS
    // ...

    return MacOSButton;
  }

}

/**
 * @description Реализация изменяется в зависимости от системы,
 * не затрагивая абстрактный слой
 */
export class WindowsUIComponents implements UIComponents {

  getButton(): ElementType {
    // здесь может быть доп. логика для MacOS
    // ...

    return WindowsButton;
  }

}
