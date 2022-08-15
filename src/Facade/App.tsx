/**
 * @description Паттерн фасад предоставляет простой интерфейс,
 * который позволяет скрыть лишние детали сложной реализации от клиента
 * @example ionic-like реализация popover
 * реализация настройки popover скрыта в кастомный хук usePopover
 */

import React, { ReactElement } from 'react';
import { usePopover } from './usePopover';

export const App = (): ReactElement => {
  const [present, dismiss] = usePopover(<div>123</div>);

  return (
    <div>
      <button
        type="button"
        onClick={present}
        style={{ margin: '100px' }}
      >
        open popover
      </button>
      <button
        type="button"
        onClick={dismiss}
      >
        close popover

      </button>
    </div>
  );
};
