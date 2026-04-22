import React from 'react';

/**
 * Slide 4: QUIÉNES SOMOS — Usa logotipo imagen, no texto
 */
export default function Slide04QuienesSomos() {
  return (
    <div style={{ width: '1920px', height: '1080px', background: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', fontFamily: 'inherit' }}>
      {/* Glow */}
      <div className="glow-pulse" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '1200px', height: '1200px', background: '#FF6435', borderRadius: '50%', filter: 'blur(400px)', opacity: 0.06 }} />

      {/* Decorative lines */}
      <div style={{ position: 'absolute', top: '120px', left: '145px', width: '120px', height: '6px', background: '#FF6435', borderRadius: '3px' }} />
      <div style={{ position: 'absolute', bottom: '120px', right: '145px', width: '120px', height: '6px', background: '#A2003C', borderRadius: '3px' }} />

      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '1500px', padding: '0 120px' }}>
        {/* Supra */}
        <p style={{ fontSize: '22px', letterSpacing: '10px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', fontWeight: 600, marginBottom: '48px' }}>
          Es gracias a esto que ideamos
        </p>

        {/* KUADRA — logotipo imagen */}
        <div style={{ marginBottom: '56px', display: 'flex', justifyContent: 'center' }}>
          <img
            src="/kuadra_logotipo_fondo_negro.png"
            alt="KUADRA"
            style={{ height: '190px', display: 'block' }}
            onError={e => { e.target.style.display = 'none'; }}
          />
        </div>

        {/* Divider */}
        <div style={{ width: '200px', height: '4px', background: 'linear-gradient(90deg, transparent, #FF6435, transparent)', margin: '0 auto 56px' }} />

        {/* Description */}
        <p style={{ fontSize: '38px', color: 'rgba(255,255,255,0.6)', fontWeight: 300, lineHeight: 1.5, maxWidth: '1200px', margin: '0 auto' }}>
          Una plataforma diseñada para{' '}
          <strong style={{ color: '#FFFFFF', fontWeight: 700 }}>restar fricción entre el cliente y el comercio</strong>{' '}
          enfocada actualmente en la{' '}
          <strong style={{ color: '#FF6435', fontWeight: 700 }}>Industria de Restauración</strong>
        </p>
      </div>
    </div>
  );
}
