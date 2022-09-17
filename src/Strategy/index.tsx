import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getMountNode } from '../constants/mounting';
import { App } from './App';

ReactDOM.render(
  <App />,
  getMountNode(),
);
