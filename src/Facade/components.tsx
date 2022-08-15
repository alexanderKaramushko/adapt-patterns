/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// @ts-nocheck

import React, { createContext, ReactNode, useState } from 'react';
import * as ReactDOM from 'react-dom';

export const OverlayContext = createContext();

export function OverlayManager(props) {
  const { children } = props;
  const [overlays, addOverlay] = useState([]);

  function createOverlay(overlayId: number, component: ReactNode, overlayRef: HTMLDivElement | undefined) {
    if (overlays.some((overlay) => overlay.id === overlayId)) {
      return;
    }

    const overlay = document.createElement('div');
    overlay.id = overlayId;

    // eslint-disable-next-line no-param-reassign
    overlayRef.current = overlay;

    document.body.append(overlay);

    addOverlay([...overlays, {
      component,
      id: overlayId,
    }]);
  }

  function removeOverlay(overlayId: number) {
    addOverlay(overlays.filter((overlay) => overlay.id !== overlayId));
    document.getElementById(overlayId.toString())?.remove();
  }

  return (
    <OverlayContext.Provider value={{ createOverlay, removeOverlay }}>
      <>
        {children}
        {overlays.map((overlay) => (
          ReactDOM.createPortal(overlay.component, document.getElementById(overlay.id) as HTMLDivElement, overlay.id)
        ))}
      </>
    </OverlayContext.Provider>
  );
}
