import React, { useState, useEffect, useCallback } from 'react';

/**
 * PresentationWrapper — Motor de Escalado Absoluto
 * Leaves room for the nav bar below by using 92% of vertical space.
 */
export default function PresentationWrapper({ children }) {
  const [scale, setScale] = useState(1);

  const calcScale = useCallback(() => {
    const navHeight = 56;
    const availableHeight = window.innerHeight - navHeight;
    const s = Math.min(window.innerWidth / 1920, availableHeight / 1080) * 0.97;
    setScale(s);
  }, []);

  useEffect(() => {
    calcScale();
    window.addEventListener('resize', calcScale);
    return () => window.removeEventListener('resize', calcScale);
  }, [calcScale]);

  return (
    <div style={{
      width: '1920px',
      height: '1080px',
      transform: `scale(${scale})`,
      transformOrigin: 'center center',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginLeft: '-960px',
      marginTop: `${-540 - 14}px`,
      overflow: 'hidden',
    }}>
      {children}
    </div>
  );
}
