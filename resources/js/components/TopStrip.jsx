// TopStrip.jsx
import React, { useState } from 'react';

export const TopStrip = ({ onToggleLogo }) => {
  const [currentLogo, setCurrentLogo] = useState('logo1');

  const handleClick = () => {
    const next = currentLogo === 'logo1' ? 'logo2' : 'logo1';
    setCurrentLogo(next);
    onToggleLogo(next);
  };

  return (
    <div
      style={{
        backgroundColor: '#232a5c',
        color: '#fff',
        padding: '6px 0',
        textAlign: 'center',
        width: '100%'
      }}
    >
      <button onClick={handleClick} className="btn btn-sm btn-warning fw-bold">
        Switch Logo
      </button>
    </div>
  );
};
