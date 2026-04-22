import React, { useRef, useState, useEffect } from 'react';
import SectionLabel from '../components/SectionLabel';

/**
 * Slide 7: SISTEMA — Video demo with synced step highlighting
 * * The video (~30s loop) shows the app flow. Steps auto-highlight
 * based on video currentTime. Approximate sync points:
 * 0-6s   → Escaneo QR (opening, scanning)
 * 6-12s  → Pedir Comida (menu, ordering)
 * 12-18s → Verificación (order confirmation)
 * 18-24s → Pago (payment flow)
 * 24-30s → QR Comprobación (receipt QR)
 */
const STEPS = [
  { label: 'Escaneo QR', startSec: 0 },
  { label: 'Pedir Comida', startSec: 6 },
  { label: 'Verificación', startSec: 12 },
  { label: 'Pago', startSec: 18 },
  { label: 'QR de Comprobación', startSec: 24 },
];

export default function Slide07Sistema() {
  const videoRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onTime = () => {
      const t = video.currentTime;
      let idx = 0;
      for (let i = STEPS.length - 1; i >= 0; i--) {
        if (t >= STEPS[i].startSec) { idx = i; break; }
      }
      setActiveStep(idx);
    };
    video.addEventListener('timeupdate', onTime);
    return () => video.removeEventListener('timeupdate', onTime);
  }, []);

  return (
    <div style={{ width: '1920px', height: '1080px', background: '#0D0D0D', display: 'flex', position: 'relative', overflow: 'hidden', fontFamily: 'inherit' }}>
      <div className="glow-pulse" style={{ position: 'absolute', top: '-100px', right: '200px', width: '700px', height: '700px', background: '#FF6435', borderRadius: '50%', filter: 'blur(400px)', opacity: 0.08, pointerEvents: 'none' }} />

      {/* Left — Steps + QR (narrower) */}
      <div style={{ width: '620px', height: '1080px', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 60px 80px 80px', position: 'relative', zIndex: 20, borderRight: '1px solid rgba(255,255,255,0.06)' }}>
        <SectionLabel text="El Sistema" color="#FF6435" />

        {/* Steps with active highlighting */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '40px' }}>
          {STEPS.map(({ label }, i) => {
            const isActive = i === activeStep;
            return (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                padding: '16px 20px',
                borderRadius: '16px',
                background: isActive ? 'rgba(255,100,53,0.12)' : 'transparent',
                border: isActive ? '1px solid rgba(255,100,53,0.3)' : '1px solid transparent',
                transition: 'all 0.4s ease'
              }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '12px',
                  background: isActive ? '#FF6435' : 'rgba(255,255,255,0.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, transition: 'all 0.4s ease',
                  boxShadow: isActive ? '0 4px 20px rgba(255,100,53,0.4)' : 'none'
                }}>
                  {/* Se eliminó el padStart para mostrar solo 1, 2, 3... */}
                  <span style={{
                    fontSize: '18px', fontWeight: 900,
                    color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.25)',
                    transition: 'color 0.4s ease'
                  }}>{i + 1}</span>
                </div>
                <span style={{
                  fontSize: '24px',
                  fontWeight: isActive ? 900 : 500,
                  color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.35)',
                  transition: 'all 0.4s ease'
                }}>{label}</span>
                {isActive && (
                  <div style={{
                    marginLeft: 'auto', width: '8px', height: '8px',
                    borderRadius: '50%', background: '#FF6435',
                    boxShadow: '0 0 12px #FF6435'
                  }} />
                )}
              </div>
            );
          })}
        </div>

        {/* QR 3D - Ahora con mayor tamaño, glow de fondo y sombras más profundas */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ position: 'relative', width: '220px', flexShrink: 0 }}>
            {/* Glow sutil detrás del QR */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '140px', height: '140px', background: '#FF6435', borderRadius: '50%', filter: 'blur(50px)', opacity: 0.15 }} />
            <img src="/qr actual final modelo 3d mockup.png" alt="QR 3D" style={{ width: '100%', display: 'block', position: 'relative', zIndex: 2, filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.9))' }} />
          </div>
          <div>
            <span style={{ display: 'block', fontSize: '14px', color: 'rgba(255,255,255,0.3)', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 600, marginBottom: '8px' }}>Punto de Acceso</span>
            <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.45 }}>
              Un escaneo conecta al cliente con su <strong style={{ color: '#FF6435' }}>Mesa Virtual</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Right — Video frame (larger) */}
      <div style={{ flex: 1, height: '1080px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 56px', position: 'relative', zIndex: 10 }}>
        <div style={{ width: '100%', height: '100%', position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.07)', background: '#000' }}>
          {/* macOS bar */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '40px', background: 'rgba(20,20,20,0.95)', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', padding: '0 16px', gap: '7px', zIndex: 20, pointerEvents: 'none' }}>
            {['#FF5F57', '#FFBD2E', '#28CA41'].map((c, i) => (
              <div key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
            ))}
            <span style={{ marginLeft: '12px', fontSize: '13px', color: 'rgba(255,255,255,0.3)', fontWeight: 500, letterSpacing: '1px' }}>KUADRA · Demo</span>
          </div>
          <video ref={videoRef} src="/mockup-kuadra (7) (1).mp4" autoPlay loop muted playsInline className="product-video" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', background: '#000', paddingTop: '40px' }} />
          {/* Print fallback */}
          <div className="video-print-fallback" style={{ position: 'absolute', inset: '40px 0 0 0', background: 'linear-gradient(135deg, #111 0%, #1a0800 100%)', display: 'none', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '48px' }}>
            <div style={{ width: '72px', height: '72px', background: '#FF6435', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '28px', boxShadow: '0 0 40px rgba(255,100,53,0.4)' }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polygon points="5 3 19 12 5 21 5 3" /></svg>
            </div>
            <p style={{ fontSize: '26px', fontWeight: 900, color: '#FFF' }}>Demo del Producto</p>
          </div>
        </div>
      </div>
    </div>
  );
}