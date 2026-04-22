import React from 'react';
import SectionLabel from '../components/SectionLabel';

/**
 * Slide 6: SOLUCIÓN — "Creamos Kuadra" with proper contrast
 */
export default function Slide06Solucion() {
  return (
    <div style={{ width: '1920px', height: '1080px', background: '#000000', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 160px', position: 'relative', overflow: 'hidden', fontFamily: 'inherit' }}>
      <div className="glow-pulse" style={{ position: 'absolute', top: '-200px', right: '-100px', width: '900px', height: '900px', background: '#A2003C', borderRadius: '50%', filter: 'blur(350px)', opacity: 0.15 }} />
      <div style={{ position: 'absolute', bottom: '-100px', left: '200px', width: '700px', height: '700px', background: '#FF6435', borderRadius: '50%', filter: 'blur(300px)', opacity: 0.1 }} />

      <div style={{ position: 'relative', zIndex: 10 }}>
        <SectionLabel text="Nuestra Solución" color="#FF6435" />

        <h1 style={{ fontSize: '96px', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.0, marginBottom: '80px', letterSpacing: '-3px' }}>
          Creamos <span style={{ color: '#FF6435' }}>Kuadra</span>
        </h1>

        {/* Ventajas — bright icons that contrast on dark bg */}
        <div style={{ display: 'flex', gap: '56px' }}>
          {[
            {
              title: 'Sumamos minutos',
              desc: 'a los relojes de los restaurantes',
              icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FF6435" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              )
            },
            {
              title: 'Satisfacción',
              desc: 'real para los clientes',
              icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FF6435" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              )
            },
            {
              title: 'Mayor ingreso',
              desc: 'al restaurante, mejor experiencia a los comensales',
              icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FF6435" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>
                </svg>
              )
            },
          ].map(({ title, desc, icon }, i) => (
            <div key={i} style={{ flex: 1, background: 'rgba(255,100,53,0.08)', border: '1px solid rgba(255,100,53,0.2)', borderRadius: '28px', padding: '48px', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '20px', background: 'rgba(255,100,53,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px' }}>
                {icon}
              </div>
              <h3 style={{ fontSize: '36px', fontWeight: 900, color: '#FF6435', marginBottom: '16px', lineHeight: 1 }}>{title}</h3>
              <p style={{ fontSize: '24px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.45 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
