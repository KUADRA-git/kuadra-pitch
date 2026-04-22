import React from 'react';
import SectionLabel from '../components/SectionLabel';

export default function Slide08Modelo() {
  return (
    <div style={{ width: '1920px', height: '1080px', background: '#E8E0D8', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', fontFamily: 'inherit' }}>
      {/* Brand nebulas */}
      <div style={{ position: 'absolute', top: '-200px', left: '-100px', width: '700px', height: '700px', background: '#A2003C', borderRadius: '50%', filter: 'blur(260px)', opacity: 0.12 }} />
      <div style={{ position: 'absolute', bottom: '-250px', right: '-150px', width: '800px', height: '800px', background: '#FF6435', borderRadius: '50%', filter: 'blur(280px)', opacity: 0.15 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '8px', height: '1080px', background: 'linear-gradient(180deg, #A2003C 0%, #FF6435 100%)' }} />

      <div style={{ maxWidth: '1600px', width: '100%', padding: '0 120px', position: 'relative', zIndex: 10 }}>
        <SectionLabel text="Modelo de Negocios" color="#A2003C" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', marginTop: '20px' }}>
          <div style={{ background: '#FFFFFF', borderRadius: '36px', padding: '64px', position: 'relative', overflow: 'hidden', boxShadow: '0 16px 56px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.06)' }}>
            <div style={{ position: 'absolute', top: '24px', right: '28px', background: '#22C55E20', borderRadius: '100px', padding: '6px 20px', border: '1px solid #22C55E40' }}>
              <span style={{ fontSize: '16px', fontWeight: 700, color: '#22C55E', letterSpacing: '2px' }}>PLAN IDEAL</span>
            </div>
            <h4 style={{ fontSize: '38px', fontWeight: 900, color: '#1A1A1A', marginBottom: '32px', marginTop: '20px' }}>Plan A: Comisión</h4>
            <div style={{ fontSize: '80px', fontWeight: 900, color: '#FF6435', marginBottom: '24px', lineHeight: 1 }}>2%</div>
            <p style={{ fontSize: '26px', color: '#555', lineHeight: 1.55 }}>de comisión en todas las transacciones dentro de la aplicación</p>
          </div>
          <div style={{ background: '#0C0C0C', borderRadius: '36px', padding: '64px', borderLeft: '14px solid #FF6435', boxShadow: '0 20px 80px rgba(0,0,0,0.2)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '24px', right: '28px', background: '#FF643520', borderRadius: '100px', padding: '6px 20px', border: '1px solid #FF643540' }}>
              <span style={{ fontSize: '16px', fontWeight: 700, color: '#FF6435', letterSpacing: '2px' }}>BACKUP</span>
            </div>
            <h4 style={{ fontSize: '38px', fontWeight: 900, color: '#FF6435', marginBottom: '32px', marginTop: '20px' }}>Plan B: Suscripción</h4>
            <div style={{ fontSize: '80px', fontWeight: 900, color: 'rgba(255,255,255,0.9)', marginBottom: '24px', lineHeight: 1 }}>Fija</div>
            <p style={{ fontSize: '26px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.55 }}>Suscripción plana para el servicio por temas de legalidad</p>
          </div>
        </div>
      </div>
    </div>
  );
}
