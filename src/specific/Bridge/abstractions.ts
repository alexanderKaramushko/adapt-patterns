import { ElementType } from 'react';
import { UIComponents as UIComponentsInterface } from './interfaces';

/**
 * @description Абстрактная часть, не зависит от реализации
 * и, тем самым, может изменяться независимо от реализации
 */
export class UISystem {

  private UIComponents!: UIComponentsInterface;

  constructor(UIComponents: UIComponentsInterface) {
    this.UIComponents = UIComponents;
  }

  createButton(): ElementType {
    return this.UIComponents.getButton();
  }

}
