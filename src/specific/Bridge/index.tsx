/**
 * @description Паттерн мост позволяет разделить абстрактный слой и слой реализации,
 * улучшая расширяемость и предоставляя единый слой абсракции для работы
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getMountNode } from '../../constants/mounting';
import { App } from './App';

ReactDOM.render(<App />, getMountNode());
