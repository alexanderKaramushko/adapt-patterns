/**
 * @description Паттерн switch events позволяет обрабатывать многочисленные события на одном элементе,
 * не создавая большое кол-во однотипных функций-хендлеров для обработки этих событий.
 */

/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { CSSProperties, ReactElement, SyntheticEvent, useState } from 'react';

export const SwitchEvents = (): ReactElement => {
  const [style, setStyle] = useState<CSSProperties>({
    border: '1px solid red',
    height: '200px',
    width: '200px',
  });

  function fillClickableArea(color: string): void {
    setStyle({
      ...style,
      background: color,
    });
  }

  function handleEvent(event: SyntheticEvent): void {
    switch (event.type) {
      case 'click':
        fillClickableArea('red');
        break;
      case 'mouseover':
        fillClickableArea('green');
        break;
      default:
        break;
    }
  }

  return (
    <div
      onClick={handleEvent}
      onMouseOver={handleEvent}
      style={style}
    >
      multiple events area
    </div>
  );
};
