import React from 'react';

/**
 * Slide 12: CIERRE — Punchline final
 */
export default function Slide12Cierre() {
  return (
    <div style={{ width: '1920px', height: '1080px', background: '#000000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', fontFamily: 'inherit' }}>
      {/* Orange glow */}
      <div className="glow-pulse" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '900px', height: '900px', background: '#FF6435', borderRadius: '50%', filter: 'blur(300px)', opacity: 0.12 }} />
      <div className="glow-pulse" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '500px', height: '500px', background: '#FF6435', borderRadius: '50%', filter: 'blur(150px)', opacity: 0.08, animationDelay: '2s' }} />

      {/* Isotipo */}
      <div style={{ position: 'relative', zIndex: 10, marginBottom: '56px' }}>
        <img src="/kuadra_isotipo_negativo.png" alt="K" style={{ width: '180px', display: 'block', filter: 'drop-shadow(0 0 60px rgba(255,100,53,0.4))' }} onError={e => { e.target.style.display = 'none'; }} />
      </div>

      {/* Message */}
      <p style={{ position: 'relative', zIndex: 10, fontSize: '36px', color: 'rgba(255,255,255,0.5)', fontWeight: 300, textAlign: 'center', lineHeight: 1.6, maxWidth: '1000px', marginBottom: '48px' }}>
        Potenciemos la experiencia de los clientes,<br />
        sumemos tiempo operativo a los restaurantes.
      </p>

      {/* Punchline */}
      <h1 style={{ position: 'relative', zIndex: 10, fontSize: '72px', fontWeight: 900, color: '#FFFFFF', textAlign: 'center', lineHeight: 1.15, maxWidth: '1200px', letterSpacing: '-2px' }}>
        Porque las cuentas<br />siempre deben{' '}
        <span style={{ color: '#FF6435', textShadow: '0 0 40px rgba(255,100,53,0.4)' }}>Kuadrar.</span>
      </h1>

      {/* Bottom decoration - Barra con degradado corporativo */}
      <div style={{ position: 'absolute', bottom: '56px', display: 'flex', justifyContent: 'center', width: '100%', zIndex: 10 }}>
        <span style={{
          width: '120px',
          height: '6px',
          background: 'linear-gradient(90deg, #FF6435 0%, #A2003C 100%)',
          borderRadius: '3px',
          boxShadow: '0 0 20px rgba(255,100,53,0.4)'
        }} />
      </div>
    </div>
  );
}