import React from 'react';

const IconChevronLeft = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const IconChevronRight = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

/**
 * NavigationBar — Glassmorphism + K Marker (outside canvas)
 * 
 * Props:
 *  - dark: boolean — true if current slide has dark background
 */
export default function NavigationBar({ current, total, labels, onPrev, onNext, onGoTo, dark }) {
  const progress = total > 1 ? current / (total - 1) : 0;
  const trackWidth = 360;

  // Colors based on slide background
  const counterColor = dark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.35)';
  const isotipoSrc = dark ? '/kuadra_isotipo_negativo.png' : '/kuadra_isotipo_positivo.png';

  return (
    <>
      {/* ── Slide counter (top-left, inside canvas area) ── */}
      <div style={{
        position: 'absolute',
        top: '50px', left: '150px',
        zIndex: 100,
        display: 'flex', alignItems: 'center', gap: '14px',
        transition: 'all 0.3s ease'
      }}>
        <img
          src={isotipoSrc}
          alt=""
          style={{ width: '30px', opacity: 0.6, transition: 'opacity 0.3s ease' }}
          onError={e => { e.target.style.display = 'none'; }}
        />
        <span style={{
          fontSize: '14px',
          color: counterColor,
          fontWeight: 600,
          letterSpacing: '3px',
          textTransform: 'uppercase',
          fontFamily: "'Bricolage Grotesque', sans-serif",
          transition: 'color 0.3s ease'
        }}>
          {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>

      {/* ── Navigation bar (positioned BELOW canvas) ── */}
      <div className="no-print" style={{
        position: 'absolute',
        bottom: '0px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        padding: '10px 28px',
        zIndex: 100,
      }}>
        {/* Left arrow */}
        <button className="nav-btn" onClick={onPrev} disabled={current === 0} aria-label="Anterior">
          <IconChevronLeft />
        </button>

        {/* Progress track with K marker */}
        <div style={{ width: `${trackWidth}px`, position: 'relative', padding: '12px 0' }}>
          <div className="k-progress-track">
            <div className="k-progress-fill" style={{ width: `${progress * 100}%` }} />
          </div>
          {/* K Marker */}
          <div className="k-marker" style={{ left: `${progress * trackWidth}px`, top: '50%', width: '26px', height: '26px' }}>
            <img
              src="/kuadra_isotipo_negativo.png"
              alt="K"
              style={{ width: '26px', height: '26px', display: 'block' }}
              onError={e => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<span style="color:#FF6435;font-weight:900;font-size:16px;font-family:inherit">K</span>';
              }}
            />
          </div>
          {/* Clickable segments */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex' }}>
            {Array.from({ length: total }).map((_, i) => (
              <button key={i} onClick={() => onGoTo(i)} title={labels[i]} style={{ flex: 1, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }} />
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button className="nav-btn" onClick={onNext} disabled={current === total - 1} aria-label="Siguiente">
          <IconChevronRight />
        </button>
      </div>

      {/* ── Slide label (bottom-right) ── */}
      <div style={{
        position: 'absolute',
        bottom: '14px', right: '32px',
        fontFamily: "'Bricolage Grotesque', sans-serif",
        fontSize: '12px',
        color: 'rgba(255,255,255,0.18)',
        letterSpacing: '3px',
        textTransform: 'uppercase',
        fontWeight: 600,
        zIndex: 100,
      }}>
        {labels[current]}
      </div>
    </>
  );
}
