/**
 * @description Паттерн команда предоставляет компоненту единвй интерфейс команды,
 * позволяя абстрагироваться от слоя бизнес-логики и достичь переиспользуемости и гибкости интерфейса
 * @example Реализация работы кнопок и сочетаний клавиш вырезки и вставки через CutCommand и PasteCommand
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getMountNode } from '../constants/mounting';
import { App } from './App';

ReactDOM.render(
  <App />,
  getMountNode(),
);
