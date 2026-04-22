import React from 'react';

/**
 * MaleSilhouetteSVG — Silueta masculina corporativa premium
 */
export default function MaleSilhouetteSVG({ color = '#374151' }) {
  return (
    <svg viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      {/* Cabeza */}
      <ellipse cx="60" cy="32" rx="22" ry="26" fill={color} />
      {/* Cuello */}
      <rect x="51" y="54" width="18" height="14" rx="4" fill={color} />
      {/* Hombros / Traje */}
      <path d="M12 180 C12 130, 30 110, 51 102 L60 118 L69 102 C90 110, 108 130, 108 180 Z" fill={color} />
      {/* Solapa izquierda */}
      <path d="M51 102 L44 122 L60 118 Z" fill="rgba(0,0,0,0.15)" />
      {/* Solapa derecha */}
      <path d="M69 102 L76 122 L60 118 Z" fill="rgba(0,0,0,0.15)" />
      {/* Corbata */}
      <path d="M57 106 L60 118 L63 106 L60 102 Z" fill="rgba(255,255,255,0.2)" />
    </svg>
  );
}
