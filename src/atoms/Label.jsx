import React from 'react';
import './Label.css';

function Label({ visible }) {
  return (
    <span className="label" style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}>
      Copiado
    </span>
  );
}

export default Label;
