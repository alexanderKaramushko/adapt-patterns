import React, { ReactElement } from 'react';
import { UISystem } from './abstractions';
import { WindowsUIComponents } from './implementations';

const uiSystem = new UISystem(new WindowsUIComponents());

export const App = (): ReactElement => {
  const Button = uiSystem.createButton();

  return <Button>button</Button>;
};
