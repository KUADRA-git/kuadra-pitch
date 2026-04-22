import React, { useState, useEffect } from 'react';
import PresentationWrapper from './components/PresentationWrapper';
import NavigationBar from './components/NavigationBar';
import SlideTransition from './components/SlideTransition';

import Slide01Hook from './slides/Slide01Hook';
import Slide02ProblemaCliente from './slides/Slide02ProblemaCliente';
import Slide03ProblemaLocal from './slides/Slide03ProblemaLocal';
import Slide04QuienesSomos from './slides/Slide04QuienesSomos';
import Slide05Equipo from './slides/Slide05Equipo';
import Slide06Solucion from './slides/Slide06Solucion';
import Slide07Sistema from './slides/Slide07Sistema';
import Slide08Modelo from './slides/Slide08Modelo';
import Slide09Mercado from './slides/Slide09Mercado';
import Slide10Capital from './slides/Slide10Capital';
import Slide11Competencia from './slides/Slide11Competencia';
import Slide12Cierre from './slides/Slide12Cierre';

const SLIDES = [
  { id: 'hook',        label: 'Hook',        Component: Slide01Hook,            dark: true },
  { id: 'problema',    label: 'Problema',    Component: Slide02ProblemaCliente, dark: false },
  { id: 'local',       label: 'Resultados',  Component: Slide03ProblemaLocal,   dark: true },
  { id: 'quienes',     label: 'Kuadra',      Component: Slide04QuienesSomos,    dark: true },
  { id: 'equipo',      label: 'Equipo',      Component: Slide05Equipo,          dark: false },
  { id: 'solucion',    label: 'Solución',    Component: Slide06Solucion,        dark: true },
  { id: 'sistema',     label: 'Sistema',     Component: Slide07Sistema,         dark: true },
  { id: 'modelo',      label: 'Modelo',      Component: Slide08Modelo,          dark: false },
  { id: 'mercado',     label: 'Mercado',     Component: Slide09Mercado,         dark: true },
  { id: 'capital',     label: 'Capital',     Component: Slide10Capital,         dark: true },
  { id: 'competencia', label: 'Competencia', Component: Slide11Competencia,     dark: false },
  { id: 'cierre',      label: 'Cierre',      Component: Slide12Cierre,          dark: true },
];

export default function PitchDeck() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        setCurrent(c => Math.min(c + 1, SLIDES.length - 1));
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        setCurrent(c => Math.max(c - 1, 0));
      }
      if (e.key === 'Home') { e.preventDefault(); setCurrent(0); }
      if (e.key === 'End') { e.preventDefault(); setCurrent(SLIDES.length - 1); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const ActiveSlide = SLIDES[current].Component;

  return (
    <>
      <style>{`.print-container { display: none; }`}</style>

      <div className="no-print" style={{
        width: '100vw', height: '100vh',
        background: '#0C0C0C',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden', position: 'relative',
        fontFamily: "'Bricolage Grotesque', sans-serif"
      }}>
        <PresentationWrapper>
          <SlideTransition slideKey={SLIDES[current].id}>
            <ActiveSlide />
          </SlideTransition>
        </PresentationWrapper>

        <NavigationBar
          current={current}
          total={SLIDES.length}
          labels={SLIDES.map(s => s.label)}
          dark={SLIDES[current].dark}
          onPrev={() => setCurrent(c => Math.max(c - 1, 0))}
          onNext={() => setCurrent(c => Math.min(c + 1, SLIDES.length - 1))}
          onGoTo={(i) => setCurrent(i)}
        />
      </div>

      <div className="print-container">
        {SLIDES.map(({ id, Component }) => (
          <div key={id} className="print-slide"><Component /></div>
        ))}
      </div>
    </>
  );
}