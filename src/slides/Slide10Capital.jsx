import React from 'react';
import SectionLabel from '../components/SectionLabel';

export default function Slide10Capital() {
  const items = [
    { label: 'Constitución de la empresa', amount: '$1,500' },
    { label: 'CyberSeguridad', amount: '$2,500' },
    { label: 'Marketing y Materiales', amount: '$1,000' },
    { label: 'Provisión y Trámites', amount: '$2,000' }
  ];

  return (
    <div style={{ width: '1920px', height: '1080px', background: '#000000', color: '#FFFFFF', display: 'flex', position: 'relative', overflow: 'hidden', fontFamily: 'inherit' }}>
      <div className="glow-pulse" style={{ position: 'absolute', top: '-200px', left: '-200px', width: '800px', height: '800px', background: '#FF6435', borderRadius: '50%', filter: 'blur(400px)', opacity: 0.1 }} />

      {/* Panel izquierdo */}
      <div style={{ width: '55%', height: '1080px', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '100px 120px 0 120px', borderRight: '1px solid rgba(255,255,255,0.08)' }}>

        {/* Etiqueta superior */}
        <SectionLabel text="Capital Semilla" color="#FF6435" />

        {/* Monto principal - Se aumentó el margen inferior (de 5px a 25px) para separar la descripción */}
        <h1 style={{
          fontSize: '160px',
          fontWeight: 900,
          color: '#FFFFFF',
          lineHeight: 1.0,
          margin: '-25px 0 25px 0',
          letterSpacing: '-4px',
          textShadow: '0 0 80px rgba(255,100,53,0.25)'
        }}>
          $7,000
        </h1>

        {/* Descripción - Ahora tiene una separación más clara con respecto al número de arriba */}
        <p style={{
          fontSize: '28px',
          fontWeight: 300,
          color: 'rgba(255,255,255,0.45)',
          marginBottom: '40px',
          maxWidth: '750px',
          lineHeight: 1.6
        }}>
          Para adentrarnos de forma segura. Un financiamiento estratégico con destino claro.
        </p>

        {/* Tabla de precios */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', maxWidth: '820px' }}>
          {items.map(({ label, amount }, i) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '28px 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
              <span style={{ fontSize: '30px', color: 'rgba(255,255,255,0.7)', fontWeight: 400 }}>{label}</span>
              <span style={{ fontSize: '42px', fontWeight: 900, color: '#FF6435' }}>{amount}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Panel derecho — Visual */}
      <div style={{ width: '45%', height: '1080px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', background: '#A2003C', borderRadius: '50%', filter: 'blur(200px)', opacity: 0.15 }} />

        <div style={{ position: 'relative', zIndex: 10, width: '420px', height: '420px', borderRadius: '50%', background: 'conic-gradient(#FF6435 0deg 77deg, #A2003C 77deg 206deg, #FF8C66 206deg 257deg, #C7305B 257deg 360deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 40px 100px rgba(255,100,53,0.25)' }}>
          <div style={{ width: '280px', height: '280px', borderRadius: '50%', background: '#000000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '52px', fontWeight: 900, color: '#FF6435' }}>$7K</span>
            <span style={{ fontSize: '18px', color: 'rgba(255,255,255,0.4)', letterSpacing: '3px', textTransform: 'uppercase', marginTop: '8px' }}>Capital Semilla</span>
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 10, marginTop: '48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 40px' }}>
          {[
            { color: '#FF6435', label: 'Constitución', pct: '21%' },
            { color: '#A2003C', label: 'CyberSeguridad', pct: '36%' },
            { color: '#FF8C66', label: 'Marketing', pct: '14%' },
            { color: '#C7305B', label: 'Provisión', pct: '29%' },
          ].map(({ color, label, pct }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '14px', height: '14px', borderRadius: '4px', background: color, flexShrink: 0 }} />
              <span style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)' }}>{label}</span>
              <span style={{ fontSize: '18px', color: 'rgba(255,255,255,0.3)', fontWeight: 700 }}>{pct}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}