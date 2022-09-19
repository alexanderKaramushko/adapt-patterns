/**
 * @description Паттерн шаблонный метод позволяет вынести
 * переиспользуемый алгоритм в родитель и переопределять части этого алгоритма в потомках
 * @example Пример переопределения функций транзакций при одном и том же алгоритме оплаты
 */

import React, { ReactElement } from 'react';
import { ApplePay } from './ApplePay';
import { GooglePay } from './GooglePay';
import { TransactionContainer } from './TransactionContainer';

export const App = (): ReactElement => (
  <>
    <TransactionContainer ConcreteTransaction={ApplePay} />
    <TransactionContainer ConcreteTransaction={GooglePay} loading={false} />
  </>
);
