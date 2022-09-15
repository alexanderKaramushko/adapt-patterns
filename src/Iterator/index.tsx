/**
 * @description Паттерн итератор позволяет скрывать сложные реализации
 * обхода коллекций
 * @example Построение меню с проверкой доступов и типа элемента меню
 * с помощью итератора
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { getMountNode } from '../constants/mounting';

import { App } from './App';

ReactDOM.render(<App />, getMountNode());
