/**
 * @description Паттерн декоратор позволяет расширить исходный класс,
 * не прибегая к наследованию
 * @example базовая реализация MobX, который использует декораторы
 * для подключения компонентов к хранилищу путем расширения их функциональности
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { getMountNode } from '../constants/mounting';

import { App } from './App';
import Counter from './store';

ReactDOM.render(<App counter={Counter} />, getMountNode());
