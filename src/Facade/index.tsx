import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getMountNode } from '../constants/mounting';
import { App } from './App';
import { OverlayManager } from './components';

ReactDOM.render(
  <OverlayManager>
    <App />
  </OverlayManager>,
  getMountNode(),
);
