/**
 * @description Паттерн фабрика позволяет изолироваться от прямого вызова new
 * Потребитель не знает ничего о реализации и завязывается лишь на интерфейс фабрики,
 * которая может создавать серию продуктов
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './App';
import { LayoutFactory } from './interfaces';
import { DesktopLayout } from './layouts';

const mountNode = document.getElementById('app');

let layoutFactory: LayoutFactory | null = null;

if (window.innerWidth > 1024) {
  layoutFactory = new DesktopLayout();
}

ReactDOM.render(<App layoutFactory={layoutFactory} />, mountNode);
