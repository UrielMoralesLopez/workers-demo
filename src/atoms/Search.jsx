import React, { useState, useCallback } from "react";
import './Search.css';

function Search({ setSearchText }) {
    const [searchText, setSearchTextState] = useState("");

    // Usamos useCallback para evitar que handleSearch se redefine en cada renderizado
    const handleSearch = useCallback((e) => {
        const value = e.target.value;
        setSearchText(value); // Pasamos el valor de búsqueda a Home.jsx
        setSearchTextState(value); // Actualizamos el estado local de búsqueda
    }, [setSearchText]);

    return (
        <div className="search-container">
            <input
                className="search"
                placeholder="Search..."
                value={searchText}
                onChange={handleSearch}
            />
        </div>
    );
}

export default Search;
