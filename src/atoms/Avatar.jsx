import React from 'react';
import './Avatar.css';

function Avatar({ employee, avatarSize, onClick }) {
  // Si no hay empleado o la imagen es null, asignamos la imagen por defecto
  const imageUrl = employee?.img ? `./images/avatar/${employee.img}` : './images/avatar/user_default.png';

  return (
    <img 
      src={imageUrl} 
      alt={employee?.name || 'User avatar'} 
      className={`avatar ${avatarSize}`} 
      onError={(e) => e.target.src = './images/avatar/user_default.png'} // Fallback en caso de error de carga
      onClick={onClick}
    />
  );
}

export default Avatar;
