import React from 'react';

/**
 * SlideTransition — Wrapper de animación CSS
 *
 * Usa un `key` que cambia para forzar re-mount y disparar la animación
 * CSS `slideIn` (opacity + translateY) en cada cambio de slide.
 */
export default function SlideTransition({ slideKey, children }) {
  return (
    <div
      key={slideKey}
      className="slide-enter"
      style={{
        width: '1920px',
        height: '1080px',
        position: 'relative',
      }}
    >
      {children}
    </div>
  );
}
