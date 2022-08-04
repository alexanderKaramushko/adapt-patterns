/* eslint-disable no-console */
/**
 * @description Паттерн компоновщик позволяет обрабатывать древовидную
 * структуру данных, члены которой реализуют один и тот же интерфейс
 * @example Рекурсивное построение простого виртуального дерева
 */

import { ClassComponent, FunctionComponent, VDOM } from './implementations';

const vDomChild = new VDOM();
vDomChild.add(new FunctionComponent());
vDomChild.add(new ClassComponent());

const vDomParent = new VDOM();
vDomParent.add(vDomChild);
vDomParent.add(new ClassComponent());

const initializedVDOM = vDomParent.init();

console.log(initializedVDOM);
