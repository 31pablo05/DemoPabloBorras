// MobileMenu.jsx — React Island: menú hamburguesa animado
import { useState } from 'react';

/** @param {{ links: Array<{label: string, href: string}> }} props */
export default function MobileMenu({ links = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(prev => !prev);
  const close  = () => setIsOpen(false);

  return (
    <div>
      {/* Botón hamburguesa / X */}
      <button
        onClick={toggle}
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isOpen}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
        }}
      >
        <span
          style={{
            display: 'block',
            width: '24px',
            height: '2px',
            background: '#1B3A4B',
            borderRadius: '2px',
            transition: 'transform 0.3s, opacity 0.3s',
            transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          }}
        />
        <span
          style={{
            display: 'block',
            width: '24px',
            height: '2px',
            background: '#1B3A4B',
            borderRadius: '2px',
            transition: 'opacity 0.3s',
            opacity: isOpen ? 0 : 1,
          }}
        />
        <span
          style={{
            display: 'block',
            width: '24px',
            height: '2px',
            background: '#1B3A4B',
            borderRadius: '2px',
            transition: 'transform 0.3s, opacity 0.3s',
            transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
          }}
        />
      </button>

      {/* Panel desplegable */}
      {isOpen && (
        <div
          className="animate-slide-down"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(27,58,75,0.10)',
            padding: '16px 0',
            boxShadow: 'var(--shadow-lg)',
            zIndex: 100,
          }}
        >
          <nav aria-label="Menú móvil">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                style={{
                  display: 'block',
                  padding: '12px 24px',
                  color: '#1B3A4B',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  borderBottom: '1px solid rgba(27,58,75,0.08)',
                  transition: 'color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--color-accent)';
                  e.currentTarget.style.background = 'rgba(27,58,75,0.04)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#1B3A4B';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
