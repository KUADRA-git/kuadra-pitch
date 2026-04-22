import React from 'react';
import SectionLabel from '../components/SectionLabel';

/**
 * Slide 3: RESULTADOS — Consecuencias para el cliente y el local
 */
export default function Slide03ProblemaLocal() {
  return (
    <div style={{ width: '1920px', height: '1080px', background: 'linear-gradient(135deg, #A2003C 0%, #6B0028 60%, #3D0017 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', fontFamily: 'inherit' }}>
      {/* Glows */}
      <div className="glow-pulse" style={{ position: 'absolute', top: '-200px', right: '-150px', width: '800px', height: '800px', background: '#FF6435', borderRadius: '50%', filter: 'blur(350px)', opacity: 0.2 }} />
      <div style={{ position: 'absolute', bottom: '-200px', left: '100px', width: '600px', height: '600px', background: '#FF6435', borderRadius: '50%', filter: 'blur(300px)', opacity: 0.08 }} />

      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '1400px', padding: '0 80px' }}>
        <SectionLabel text="Resultados" color="rgba(255,255,255,0.5)" />

        <h2 style={{ fontSize: '72px', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.1, marginBottom: '80px', letterSpacing: '-2px' }}>
          ¿Qué pasó al final?
        </h2>

        {/* Two result cards side by side */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
          {/* Client result */}
          <div style={{ background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '32px', padding: '56px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FF6435" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
              <span style={{ fontSize: '22px', color: '#FF6435', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>El Cliente</span>
            </div>
            <h3 style={{ fontSize: '40px', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.15 }}>
              No cumplimos el objetivo de celebrar debidamente
            </h3>
          </div>

          {/* Restaurant result */}
          <div style={{ background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '32px', padding: '56px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FF6435" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3h18v18H3z"/><path d="M12 8v8"/><path d="M8 12h8"/>
              </svg>
              <span style={{ fontSize: '22px', color: '#FF6435', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>El Restaurante</span>
            </div>
            <h3 style={{ fontSize: '40px', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.15 }}>
              Recibió menos dinero por la ineficiencia del local
            </h3>
          </div>
        </div>

        {/* Bottom line */}
        <div style={{ marginTop: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
          <span style={{ width: '60px', height: '2px', background: 'rgba(255,255,255,0.2)' }} />
          <span style={{ fontSize: '26px', color: 'rgba(255,255,255,0.45)', fontWeight: 300, letterSpacing: '3px' }}>
            Ambos lados pierden
          </span>
          <span style={{ width: '60px', height: '2px', background: 'rgba(255,255,255,0.2)' }} />
        </div>
      </div>
    </div>
  );
}
