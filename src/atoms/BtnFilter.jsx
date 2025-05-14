import React from 'react';
import './BtnFilter.css';

function BtnFilter({ department, dataDepartment, onClick, isActive }) {
  return (
    <button 
      className={`col-auto btn-filter ${isActive ? 'active' : ''}`} 
      data-department={dataDepartment} 
      onClick={onClick}
      tabIndex="0"
    >
        {department} {/* El nombre visible del departamento */}
    </button>
  );
}

export default BtnFilter;
