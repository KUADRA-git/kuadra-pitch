import React from 'react';

export default function Slide05Equipo() {
  const founders = [
    {
      name: 'Enrique Martineau',
      role: 'Founder & COO ',
      study: 'Economía Empresarial &\nMatemáticas Industriales',
      accent: '#FF6435',
      image: '/enrique.jpg'
    },
    {
      name: 'Giovanni Zarbo',
      role: 'Founder & CTO',
      study: 'Ingeniería en Sistemas',
      accent: '#FF6435',
      image: '/giovanni.jpg'
    },
    {
      name: 'Diego Requena',
      role: 'Founder  & CFO',
      study: 'Economía Empresarial &\nContaduría Pública',
      accent: '#FF6435',
      image: '/diego.jpg'
    }
  ];

  return (
    <div style={{ width: '1920px', height: '1080px', background: '#F5F5F7', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 140px', position: 'relative', overflow: 'hidden', fontFamily: 'inherit' }}>

      {/* Nebulosas de marca para profundidad visual */}
      <div style={{ position: 'absolute', top: '-250px', right: '-150px', width: '900px', height: '900px', background: '#A2003C', borderRadius: '50%', filter: 'blur(300px)', opacity: 0.15 }} />
      <div style={{ position: 'absolute', bottom: '-200px', left: '-200px', width: '800px', height: '800px', background: '#FF6435', borderRadius: '50%', filter: 'blur(280px)', opacity: 0.12 }} />

      <div style={{ position: 'relative', zIndex: 10 }}>

        {/* Cabecera impactante */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '86px', fontWeight: 900, letterSpacing: '-3px', color: '#111111' }}>
            Conoce al <span style={{ color: '#FF6435' }}>Team</span>
          </h2>

        </div>

        {/* Grid de tarjetas con tamaño uniforme */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '48px',
          alignItems: 'stretch' // Garantiza que todas las tarjetas tengan la misma altura
        }}>
          {founders.map(({ name, role, study, accent, image }) => (
            <div key={name} style={{
              background: '#FFFFFF',
              borderRadius: '40px',
              padding: '60px 48px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: '0 30px 80px rgba(0,0,0,0.08), 0 10px 24px rgba(0,0,0,0.04)',
              borderTop: `8px solid ${accent}`,
              position: 'relative',
              overflow: 'hidden',
              minHeight: '620px' // Altura fija para asegurar uniformidad visual
            }}>

              {/* Círculo de Avatar con resplandor suave y FOTOGRAFÍA */}
              <div style={{
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${accent}15, ${accent}05)`,
                border: `4px solid ${accent}25`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '32px',
                padding: '6px', // Espaciado sutil para crear un marco alrededor de la foto
                overflow: 'hidden',
                boxShadow: `0 16px 48px ${accent}25`
              }}>
                <img
                  src={image}
                  alt={`Foto de ${name}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%'
                  }}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>

              {/* Badge de Rol corporativo */}
              <div style={{
                background: `${accent}12`,
                border: `1px solid ${accent}30`,
                borderRadius: '100px',
                padding: '10px 28px',
                marginBottom: '24px'
              }}>
                <span style={{ fontSize: '16px', fontWeight: 800, color: accent, letterSpacing: '2px', textTransform: 'uppercase' }}>{role}</span>
              </div>

              {/* Nombre del Fundador */}
              <h3 style={{ fontSize: '36px', fontWeight: 900, color: '#111111', marginBottom: '16px', lineHeight: 1.1 }}>{name}</h3>

              {/* Línea decorativa de estudio */}
              <div style={{ width: '48px', height: '3px', background: `${accent}40`, marginBottom: '20px', borderRadius: '2px' }} />

              {/* Información académica */}
              <p style={{ fontSize: '21px', color: '#666666', lineHeight: 1.5, whiteSpace: 'pre-line', fontWeight: 400 }}>{study}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}