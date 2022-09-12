import React, { ReactElement } from 'react';
import { CutCommand, PasteCommand, Receiver } from './implemenstation';
import { Invoker } from './Invoker';

const receiver = new Receiver();
const cutCommand = new CutCommand(receiver);
const pasteCommand = new PasteCommand(receiver);

window.addEventListener('keypress', () => {
  /** инициализировать cut и paste команды при при ctrl + x и ctrl + v */
});

export const App = (): ReactElement => (
  /** инициализировать cut и paste команды для кнопок */
  <Invoker cutCommand={cutCommand} pasteCommand={pasteCommand} />
);
