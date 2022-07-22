import { ReactElement } from 'react';

export interface LayoutComponent {
  render(): () => ReactElement;
}

export interface LayoutFactory {
  createHeader(): LayoutComponent;
  createMain(): LayoutComponent;
  createFooter(): LayoutComponent;
}
