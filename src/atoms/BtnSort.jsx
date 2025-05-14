import React from 'react';
import './BtnSort.css';

function BtnSort({ text, dataSort, sortOrder, onClick }) {
  return (
    <button 
      className={`btn-sort sort ${sortOrder === "asc" ? "asc" : "desc"}`} 
      data-sort={dataSort}
      onClick={() => onClick(dataSort)}
    >
      {text}
    </button>
  );
}

export default BtnSort;
