import React from 'react';

/**
 * SectionLabel — Etiqueta decorativa de sección
 *
 * Barra de color + texto en mayúsculas con tracking amplio.
 */
export default function SectionLabel({ text, color = '#FF6435' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '56px' }}>
      <span style={{ width: '80px', height: '6px', background: color, display: 'block', borderRadius: '3px' }} />
      <span style={{
        color,
        fontWeight: 900,
        fontSize: '26px',
        letterSpacing: '6px',
        textTransform: 'uppercase',
        fontFamily: 'inherit'
      }}>
        {text}
      </span>
    </div>
  );
}
