import React, { FC, PropsWithChildren, ReactElement } from 'react';

import './style.css';

export const MacOSButton: FC<PropsWithChildren<{}>> = ({ children }): ReactElement => (
  <button type="button" className="mac-os-button">{children}</button>
);

export const WindowsButton: FC<PropsWithChildren<{}>> = ({ children }): ReactElement => (
  <button type="button" className="windows-button">{children}</button>
);
