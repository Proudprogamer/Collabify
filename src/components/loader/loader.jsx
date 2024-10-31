import React from 'react';

const Loader = () => {
  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom right, #D6E6F2, #B3D9FF, #8CC4FF, #5EADF2)',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden'
      }}
    >
      {/* Snowflake Background */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none'
        }}
      >
        {[...Array(50)].map((_, i) => {
          const size = Math.random() * 5 + 2;
          const delay = Math.random() * 10;
          const duration = Math.random() * 10 + 10;
          const opacity = Math.random() * 0.5 + 0.2;

          return (
            <div 
              key={i} 
              style={{
                position: 'absolute',
                backgroundColor: 'rgba(255,255,255,0.7)',
                borderRadius: '50%',
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `-10%`,
                opacity: opacity,
                animation: `snowfall ${duration}s linear infinite`,
                animationDelay: `-${delay}s`
              }}
            />
          );
        })}
      </div>

      {/* Central Logo */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 200 200" 
        style={{
          width: '192px',
          height: '192px',
          animation: 'breathe 3s infinite',
          transformOrigin: 'center'
        }}
      >
        <g transform="translate(100,100)">
          {/* Interconnected Hexagon Network */}
          <g style={{ opacity: 0.8 }}>
            {/* Outer Hexagon */}
            <path 
              d="M0,-80 L69.28,-40 L69.28,40 L0,80 L-69.28,40 L-69.28,-40 Z" 
              fill="none" 
              stroke="#2C5FA6" 
              strokeWidth="6" 
            />
            
            {/* Inner Connections */}
            <line x1="0" y1="-80" x2="0" y2="0" stroke="#2C5FA6" strokeWidth="3" strokeDasharray="5,5" />
            <line x1="69.28" y1="-40" x2="0" y2="0" stroke="#2C5FA6" strokeWidth="3" strokeDasharray="5,5" />
            <line x1="69.28" y1="40" x2="0" y2="0" stroke="#2C5FA6" strokeWidth="3" strokeDasharray="5,5" />
            <line x1="0" y1="80" x2="0" y2="0" stroke="#2C5FA6" strokeWidth="3" strokeDasharray="5,5" />
            <line x1="-69.28" y1="40" x2="0" y2="0" stroke="#2C5FA6" strokeWidth="3" strokeDasharray="5,5" />
            <line x1="-69.28" y1="-40" x2="0" y2="0" stroke="#2C5FA6" strokeWidth="3" strokeDasharray="5,5" />
          </g>

          {/* Central Node */}
          <circle 
            cx="0" 
            cy="0" 
            r="15" 
            fill="#2C5FA6" 
            style={{opacity: 0.6}}
          />
        </g>
      </svg>

      {/* Animations */}
      <style>
        {`
          @keyframes breathe {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          @keyframes snowfall {
            0% { 
              transform: translateY(0) rotate(0deg);
            }
            100% { 
              transform: translateY(110vh) rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;