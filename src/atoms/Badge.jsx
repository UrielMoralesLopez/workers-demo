import React from 'react';
import './Badge.css';

function Badge({ employee }) {
  if (!employee || !employee.department) {
    return null;
  }

  return (
    <span className={`badge mt-1 mb-3`}>
      {employee.department}
    </span>
  );
}

export default Badge;
