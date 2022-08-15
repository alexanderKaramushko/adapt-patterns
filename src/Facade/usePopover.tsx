/* eslint-disable @typescript-eslint/explicit-function-return-type */
// @ts-nocheck

import { ReactNode, useContext, useMemo, useRef } from 'react';
import { OverlayContext } from './components';

export function usePopover(component: ReactNode) {
  const { createOverlay, removeOverlay } = useContext(OverlayContext);

  const overlayRef = useRef<HTMLDivElement>();
  const overlayId = useMemo(() => Math.random(), []);

  function present(event) {
    if (createOverlay) {
      createOverlay(overlayId, component, overlayRef);
    }

    if (overlayRef.current) {
      const someElementOffset = 30;

      overlayRef.current.style.position = 'absolute';
      overlayRef.current.style.top = `${event.target.offsetTop - someElementOffset}px`;
      overlayRef.current.style.left = `${event.target.offsetLeft + someElementOffset}px`;
    }

  }

  function dismiss() {
    overlayRef.current = undefined;

    removeOverlay(overlayId);
  }

  return [
    present,
    dismiss,
  ];
}
