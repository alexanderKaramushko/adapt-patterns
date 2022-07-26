/**
 * @description Паттерн одиночка предназначен для инкапсуляции глобального состояния
 * и иниициализируется только один раз
 * @example Store создается только один раз, запрещая повторную инициализацию,
 * чтобы избежать сброса данных и выполнения трудозатратной операции
 */

import { component1 } from './component1';
import { component2 } from './component2';
import Store from './store';

const store = Store.getInstance();

component1(store);
component2(store);
