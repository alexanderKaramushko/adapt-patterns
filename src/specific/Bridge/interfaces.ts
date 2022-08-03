/**
 * @description Реализация интерфейса будет отличаться для разных платформ
 */

import { ElementType } from 'react';

export interface UIComponents {
  getButton(): ElementType;
}
