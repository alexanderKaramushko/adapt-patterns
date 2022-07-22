/* eslint-disable class-methods-use-this */
import { DesktopFooter, DesktopHeader, DesktopMain } from './implementations';
import { LayoutComponent, LayoutFactory } from './interfaces';

export class DesktopLayout implements LayoutFactory {

  createHeader(): LayoutComponent {
    return new DesktopHeader();
  }

  createMain(): LayoutComponent {
    return new DesktopMain();
  }

  createFooter(): LayoutComponent {
    return new DesktopFooter();
  }

}
