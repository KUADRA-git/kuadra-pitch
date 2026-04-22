import React from 'react';
import SectionLabel from '../components/SectionLabel';

export default function Slide09Mercado() {
  return (
    <div style={{ width: '1920px', height: '1080px', background: '#000000', color: '#FFF', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 120px', position: 'relative', overflow: 'hidden', fontFamily: 'inherit' }}>
      <div className="glow-pulse" style={{ position: 'absolute', top: '-200px', left: '-100px', width: '800px', height: '800px', background: '#FF6435', borderRadius: '50%', filter: 'blur(400px)', opacity: 0.08 }} />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <SectionLabel text="Mercado Objetivo" color="#FF6435" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '36px' }}>
          {[
            { tag: 'TAM', sub: 'Mercado Total Disponible', geo: 'Venezuela', tagColor: 'rgba(255,255,255,0.18)', items: ['10.500 Locales de comida', '800 mesas cubiertas / mes', '$30 Ticket promedio', '2% de comisión'], formula: '10.500 × 800 × 30 × 12 × 2%', total: '$60.48M', bg: '#111111', border: '1px solid rgba(255,255,255,0.08)', txtColor: '#FFFFFF', subTxtColor: 'rgba(255,255,255,0.55)', formulaColor: 'rgba(255,255,255,0.3)', divider: '1px solid rgba(255,255,255,0.1)' },
            { tag: 'SAM', sub: 'Mercado Accesible', geo: 'Caracas y alrededores', tagColor: '#A2003C', items: ['800 Locales', '700 mesas cubiertas / mes', '$28 Ticket promedio', '2% de comisión'], formula: '800 × 700 × 28 × 12 × 2%', total: '$3.76M', bg: '#111111', border: '1px solid rgba(162,0,60,0.3)', txtColor: '#FFFFFF', subTxtColor: 'rgba(255,255,255,0.55)', formulaColor: 'rgba(255,255,255,0.3)', divider: '1px solid rgba(162,0,60,0.3)' },
            { tag: 'SOM', sub: 'Mercado Objetivo', geo: 'Caracas — Objetivo Inicial', tagColor: 'rgba(0,0,0,0.25)', items: ['150 Locales', '700 mesas cubiertas / mes', '$35 Ticket promedio', '2% de comisión'], formula: '150 × 700 × 35 × 12 × 2%', total: '$882K', bg: '#FF6435', border: 'none', txtColor: '#000000', subTxtColor: 'rgba(0,0,0,0.7)', formulaColor: 'rgba(0,0,0,0.5)', divider: '2px solid rgba(0,0,0,0.15)', geoWeight: 900 }
          ].map(({ tag, sub, geo, tagColor, items, formula, total, bg, border, txtColor, subTxtColor, formulaColor, divider, geoWeight }) => (
            <div key={tag} style={{ background: bg, borderRadius: '36px', padding: '48px', border, display: 'flex', flexDirection: 'column', boxShadow: tag === 'SOM' ? '0 40px 100px rgba(255,100,53,0.35)' : 'none' }}>
              <div style={{ marginBottom: '28px' }}>
                <h3 style={{ fontSize: '64px', fontWeight: 900, color: tagColor, lineHeight: 1 }}>{tag}</h3>
                <p style={{ fontSize: '20px', color: tag === 'SOM' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.4)', marginTop: '8px' }}>{sub}</p>
              </div>
              <p style={{ fontSize: '26px', color: txtColor, fontWeight: geoWeight || 700, marginBottom: '24px' }}>{geo}</p>
              <ul style={{ fontSize: '22px', color: subTxtColor, lineHeight: 2.0, listStyle: 'none', paddingLeft: 0, flex: 1, fontWeight: tag === 'SOM' ? 600 : 400 }}>
                {items.map((item, i) => <li key={i}>→ {item}</li>)}
              </ul>
              <div style={{ borderTop: divider, paddingTop: '28px', marginTop: '20px' }}>
                <p style={{ fontSize: '18px', color: formulaColor, marginBottom: '8px' }}>{formula}</p>
                <span style={{ fontSize: '52px', fontWeight: 900, color: txtColor, display: 'block' }}>{total}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
