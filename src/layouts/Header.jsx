import React, { forwardRef } from 'react';
import EmployeeSearch from '../components/EmployeeSearch';
import EmployeeFilters from '../components/EmployeeFilters';
import NavigationBar from '../components/NavigationBar';
import './Header.css';

// El Header sigue usando forwardRef
const Header = forwardRef((props, ref) => {
    const {
        setFilteredEmployees,
        filteredEmployees,
        allEmployees,
        filterEmployeesByDepartment,
        selectedFilters,
        allDepartments
    } = props;

    return (
        <header ref={ref} className="bg-xxwhite">
            <div className="container g-0">
                <div className="row g-0 justify-content-center">
                    <div className="col-12 col-md-10">
                        <div className="container pt-md-3 py-2">
                            <div className="row">
                                <div className="col-12">
                                    <NavigationBar />
                                </div>
                            </div>
                        </div>
                        <div className="container py-2">
                            <div className="row g-0">
                                <div className="col-12">
                                <EmployeeFilters
                                    toggleFilter={filterEmployeesByDepartment} 
                                    selectedFilters={selectedFilters} 
                                    departments={allDepartments} 
                                />
                                </div>
                            </div>
                        </div>
                        <div className="container py-2">
                            <div className="row g-0 ">
                                <div className="col-12">
                                <EmployeeSearch 
                                    setFilteredEmployees={setFilteredEmployees} 
                                    filteredEmployees={filteredEmployees} 
                                    allEmployees={allEmployees}
                                    activeDepartments={selectedFilters} 
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </header>
    );
});

export default Header;
