/* eslint-disable max-classes-per-file */
import React, { ReactElement } from 'react';
import { LayoutComponent } from './interfaces';

export class DesktopHeader implements LayoutComponent {

  render() {
    return (): ReactElement => (
      <header>header</header>
    );
  }

}

export class DesktopMain implements LayoutComponent {

  render() {
    return (): ReactElement => (
      <main>main</main>
    );
  }

}

export class DesktopFooter implements LayoutComponent {

  render() {
    return (): ReactElement => (
      <footer>footer</footer>
    );
  }

}
