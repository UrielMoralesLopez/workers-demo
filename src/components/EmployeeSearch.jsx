import React, { useState } from 'react';
import Search from "../atoms/Search";
import BtnSort from '../atoms/BtnSort';

function EmployeeSearch({ setFilteredEmployees, filteredEmployees, allEmployees = [], activeDepartments }) {
    const [searchText, setSearchText] = useState("");
    const [sortOrder, setSortOrder] = useState({ name: "asc", department: "asc" });

    // Manejar búsqueda
    const handleSearch = (value) => {
        setSearchText(value);
        filterEmployees(value);
    };

    // Manejar ordenación
    const sortEmployees = (criteria) => {
        if (!Array.isArray(filteredEmployees)) {
            console.error("filteredEmployees no es un array:", filteredEmployees);
            return;
        }
    
        const newOrder = sortOrder[criteria] === "asc" ? "desc" : "asc";
        setSortOrder(prev => ({ ...prev, [criteria]: newOrder }));
    
        const sorted = [...(filteredEmployees || [])].sort((a, b) => {
            let valueA = a[criteria]?.toLowerCase() || "";
            let valueB = b[criteria]?.toLowerCase() || "";
            return newOrder === "asc" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
        });
    
        setFilteredEmployees(sorted);
    };

    // Manejar filtrado
    const filterEmployees = (value) => {
        let filtered = allEmployees || [];

        if (value) {
            filtered = filtered.filter(employee =>
                employee.name.toLowerCase().includes(value.toLowerCase())
            );
        }

        if (activeDepartments.length > 0) {
            filtered = filtered.filter(employee =>
                activeDepartments.includes(employee.dataDepartment) // Ahora usa `dataDepartment`
            );
        }

        setFilteredEmployees(filtered);
    };

    return (
        <div className="employee-search container">
            <div className="row justify-content-start align-items-center">
                <div className="col-12 col-md-auto">
                    <h5 className="text-xxblack text-left mb-3 mb-md-0">Search by name</h5>
                </div>
                <div className="col-12 col-md-4">
                    <Search setSearchText={handleSearch} />
                </div>
                <div className="col-10 col-md-auto">
                    <div className="d-inline-flex align-items-center">
                        <BtnSort text="Name" dataSort="name" sortOrder={sortOrder.name} onClick={sortEmployees} />
                        <BtnSort text="Department" dataSort="dataDepartment" sortOrder={sortOrder.department} onClick={sortEmployees} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeSearch;
