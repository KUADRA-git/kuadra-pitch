import React from 'react';

export default function Slide11Competencia() {
  const solutions = [
    { title: 'Retrasos evitables', icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>) },
    { title: 'Servicio al Cliente', icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>) },
    { title: 'Perdidas de ingresos', icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>) },
  ];

  return (
    <div style={{ width: '1920px', height: '1080px', background: '#E8E0D8', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', fontFamily: 'inherit' }}>
      {/* Brand nebulas */}
      <div style={{ position: 'absolute', top: '-250px', right: '-100px', width: '800px', height: '800px', background: '#FF6435', borderRadius: '50%', filter: 'blur(260px)', opacity: 0.18 }} />
      <div style={{ position: 'absolute', bottom: '-200px', left: '-150px', width: '700px', height: '700px', background: '#A2003C', borderRadius: '50%', filter: 'blur(280px)', opacity: 0.12 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '8px', height: '1080px', background: 'linear-gradient(180deg, #FF6435 0%, #A2003C 100%)' }} />

      <div style={{ width: '100%', display: 'flex', alignItems: 'center', padding: '0 120px', gap: '60px', position: 'relative', zIndex: 10 }}>
        {/* Left — headline */}
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '48px' }}>
            <span style={{ width: '80px', height: '6px', background: '#FF6435', display: 'block', borderRadius: '3px' }} />
            <span style={{ color: '#FF6435', fontWeight: 900, fontSize: '24px', letterSpacing: '6px', textTransform: 'uppercase' }}>Competencia</span>
          </div>
          <h2 style={{ fontSize: '76px', fontWeight: 900, color: '#1A1A1A', lineHeight: 1.05, marginBottom: '40px', letterSpacing: '-3px' }}>
            <span style={{ color: '#FF6435' }}>Únicos</span> en<br />el mercado
          </h2>
          <p style={{ fontSize: '26px', color: '#666', lineHeight: 1.55, marginBottom: '48px', maxWidth: '600px' }}>
            Solucionamos problemas de fricción en la relación <strong style={{ color: '#1A1A1A' }}>cliente — local</strong>
          </p>

          {/* Kuadra badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', background: '#FFFFFF', border: '2px solid rgba(255,100,53,0.2)', borderRadius: '100px', padding: '14px 32px', boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}>
            <img src="/kuadra_logotipo_positivo.png" style={{ width: '200px' }} onError={e => { e.target.style.display = 'none'; }} />
          </div>
        </div>

        {/* Right — solution cards stacked */}
        <div style={{ width: '720px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ background: '#FFFFFF', borderRadius: '28px', padding: '40px 44px', boxShadow: '0 16px 56px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.06)' }}>
            <h3 style={{ fontSize: '28px', fontWeight: 900, color: '#1A1A1A', marginBottom: '8px' }}>Lo que solucionamos</h3>

          </div>

          {solutions.map(({ title, desc, icon }, i) => (
            <div key={i} style={{
              background: i === 0 ? '#FF6435' : i === 1 ? '#A2003C' : '#1A1A1A',
              borderRadius: '24px',
              padding: '36px 44px',
              display: 'flex', alignItems: 'center', gap: '24px',
              boxShadow: '0 12px 40px rgba(0,0,0,0.12)'
            }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {icon}
              </div>
              <div>
                <h4 style={{ fontSize: '24px', fontWeight: 900, color: '#FFFFFF', marginBottom: '6px' }}>{title}</h4>
                <p style={{ fontSize: '19px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.4 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
