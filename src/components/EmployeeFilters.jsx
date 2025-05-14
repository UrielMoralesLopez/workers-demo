import React from "react";
import BtnFilter from "../atoms/BtnFilter"; // Importamos el nuevo componente BtnFilter

function EmployeeFilters({ toggleFilter, selectedFilters = [], departments }) {
    return (
        <div className="employee-filters container">
            <div className="row justify-content-start">
                <div className="col-12 col-md-auto">
                    <h5 className="text-xxblack text-left mb-2">Filter by department</h5>
                </div>
            </div>
            <div className="row justify-content-start">
                {departments.map(({ department, dataDepartment }) => (
                    <BtnFilter
                        key={dataDepartment} // Usamos dataDepartment como clave para evitar conflictos
                        department={department} // Nombre visible del departamento
                        dataDepartment={dataDepartment} // Clave para filtrar
                        onClick={() => toggleFilter(dataDepartment)} // Llamada a la función para filtrar por departamento
                        isActive={selectedFilters.includes(dataDepartment)} // Verifica si el departamento está seleccionado
                    />
                ))}
            </div>
            
        </div>
    );
}

export default EmployeeFilters;
