import React from 'react';
import SectionLabel from '../components/SectionLabel';

export default function Slide02ProblemaCliente() {
  const notas = [
    { icon: (<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FF6435" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>), border: '#FF6435', title: 'Caos simultáneo', point: 'Muchas personas llamando al mismo tiempo a meseros' },
    { icon: (<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FF6435" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>), border: '#FF6435', title: 'Órdenes ineficientes', point: 'Dificultad e ineficiencia para órdenes simples' },
    { icon: (<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FF6435" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>), border: '#FF6435', title: 'Fragmentación de pago', point: 'Al realizar el pago habían muchos métodos distintos' },
    { icon: (<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FF6435" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>), border: '#FF6435', title: 'Cobro incorrecto', point: 'Al final, nos cobraron menos' },
  ];

  return (
    <div style={{ width: '1920px', height: '1080px', background: '#E8E0D8', display: 'flex', position: 'relative', overflow: 'hidden', fontFamily: 'inherit' }}>
      {/* Brand nebulas */}
      <div style={{ position: 'absolute', top: '-250px', right: '-150px', width: '800px', height: '800px', background: '#FF6435', borderRadius: '50%', filter: 'blur(250px)', opacity: 0.18 }} />
      <div style={{ position: 'absolute', bottom: '-200px', left: '-100px', width: '700px', height: '700px', background: '#A2003C', borderRadius: '50%', filter: 'blur(280px)', opacity: 0.12 }} />
      {/* Accent bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '8px', height: '1080px', background: 'linear-gradient(180deg, #FF6435 0%, #A2003C 100%)' }} />

      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', padding: '0 130px', position: 'relative', zIndex: 10 }}>
        {/* Left */}
        <div style={{ width: '640px', paddingRight: '80px', flexShrink: 0 }}>
          <SectionLabel text="El Problema" color="#A2003C" />
          <h2 style={{ fontSize: '86px', fontWeight: 900, color: '#1A1A1A', lineHeight: 1.05, letterSpacing: '-3px' }}>
            4 Notas<br /><span style={{ color: '#FF6435' }}>Disonantes</span>
          </h2>
        </div>
        {/* Right — elevated white cards */}
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {notas.map(({ icon, border, title, point }) => (
            <div key={title} style={{ background: '#FFFFFF', borderLeft: `10px solid ${border}`, borderRadius: '24px', padding: '40px 44px', boxShadow: '0 16px 48px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.06)' }}>
              <div style={{ marginBottom: '20px' }}>{icon}</div>
              <h4 style={{ fontSize: '30px', fontWeight: 900, color: '#1A1A1A', marginBottom: '14px', lineHeight: 1.1 }}>{title}</h4>
              <p style={{ fontSize: '24px', color: '#555', lineHeight: 1.45 }}>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
