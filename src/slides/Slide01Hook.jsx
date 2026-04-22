import React from 'react';

/**
 * Slide 1: HOOK — Storytelling (sin logo, solo introducción)
 */
export default function Slide01Hook() {
  return (
    <div style={{ width: '1920px', height: '1080px', background: '#000000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', fontFamily: 'inherit' }}>
      {/* Ambient glows */}
      <div className="glow-pulse" style={{ position: 'absolute', top: '-350px', left: '-250px', width: '1100px', height: '1100px', background: '#FF6435', borderRadius: '50%', filter: 'blur(380px)', opacity: 0.25 }} />
      <div className="glow-pulse" style={{ position: 'absolute', bottom: '-300px', right: '-200px', width: '1000px', height: '1000px', background: '#A2003C', borderRadius: '50%', filter: 'blur(360px)', opacity: 0.2, animationDelay: '2s' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '600px', background: '#FF6435', borderRadius: '50%', filter: 'blur(280px)', opacity: 0.05 }} />

      {/* Storytelling card — NO logo */}
      <div style={{ position: 'relative', zIndex: 10, background: 'rgba(17,17,17,0.85)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)', borderTop: '6px solid #FF6435', borderRadius: '40px', padding: '72px 100px', width: '1440px', textAlign: 'center', boxShadow: '0 60px 120px rgba(0,0,0,0.9)' }}>
        <p style={{ fontSize: '24px', color: 'rgba(255,255,255,0.4)', fontWeight: 300, letterSpacing: '10px', textTransform: 'uppercase', marginBottom: '40px' }}>
          14 · Diciembre · 2025
        </p>
        <h1 style={{ fontSize: '58px', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.2, margin: 0 }}>
          Día familiar, todos con un objetivo:{' '}
          <span style={{ color: '#FF6435' }}>celebrar el cumpleaños de Giovanni</span>{' '}
          de forma armoniosa.
        </h1>
        <div style={{ marginTop: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
          <span style={{ width: '60px', height: '2px', background: 'rgba(255,255,255,0.15)' }} />
          <span style={{ fontSize: '24px', color: 'rgba(255,255,255,0.3)', fontWeight: 300, letterSpacing: '4px' }}>
            Pero algo salió distinto...
          </span>
          <span style={{ width: '60px', height: '2px', background: 'rgba(255,255,255,0.15)' }} />
        </div>
      </div>
    </div>
  );
}
