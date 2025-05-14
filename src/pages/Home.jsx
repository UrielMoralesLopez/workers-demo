import React, { useState, useEffect, useRef } from 'react';
import Content from '../layouts/Content';
import Header from '../layouts/Header';
import EmployeeDetail from '../components/EmployeeDetail';
import BtnRound from '../atoms/BtnRound';
import './Home.css';

function Home() {
    const [allEmployees, setAllEmployees] = useState([]);
    const [filteredEmployees, setFilteredEmployees] = useState([]);
    const [activeDepartments, setActiveDepartments] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [loading, setLoading] = useState(true);
    const [headerHeight, setHeaderHeight] = useState(0);
    const headerRef = useRef(null);

    useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/employees.json')
            .then(response => response.json())
            .then(data => {
                const employeesWithDepartments = data.map(emp => ({
                    ...emp,
                    dataDepartment: emp.department
                        ? emp.department.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '')
                        : 'unknown'
                }));

                setAllEmployees(employeesWithDepartments);
                setFilteredEmployees(employeesWithDepartments);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error al cargar empleados:", error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        const updateHeaderHeight = () => {
            if (window.innerWidth > 768 && headerRef.current) { // Solo en escritorio
                setHeaderHeight(headerRef.current.offsetHeight);
            } else {
                setHeaderHeight(0); // Resetear en móviles
            }
        };

        setTimeout(updateHeaderHeight, 100); // Ejecutar una vez al inicio
        window.addEventListener("resize", updateHeaderHeight);

        return () => window.removeEventListener("resize", updateHeaderHeight);
    }, []);

    const closeDetail = () => {
        setSelectedEmployee(null);
        document.body.style.overflow = 'auto';
    };

    const openDetail = (employee) => {
        setSelectedEmployee(employee);
        document.body.style.overflow = 'hidden';
    };

    const handleClose = () => {
        closeDetail();
    };

    const handleSelectEmployee = (employee) => {
        setSelectedEmployee(employee);
    };

    // Función para hacer scroll hacia arriba
    const scrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });  // Desplazamiento suave hacia la parte superior
    };

    useEffect(() => {
        const handleScroll = () => {
            // Muestra el botón solo si se ha desplazado hacia abajo más de 100px
            if (window.scrollY > 100) {
                document.querySelector('.btn-scrollup').style.display = 'block';
            } else {
                document.querySelector('.btn-scrollup').style.display = 'none';
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const departmentList = allEmployees.length > 0
        ? [...new Set(allEmployees.map(emp => emp.department))]
        : [];

    const departmentListWithKeys = departmentList.map(department => ({
        department: department,
        dataDepartment: department.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '')
    }));

    const filterEmployeesByDepartment = (dataDepartment) => {
        if (activeDepartments.includes(dataDepartment)) {
            setActiveDepartments(prev => prev.filter(d => d !== dataDepartment));
        } else {
            setActiveDepartments(prev => [...prev, dataDepartment]);
        }
    };

    useEffect(() => {
        let filtered = allEmployees;

        if (activeDepartments.length > 0) {
            filtered = filtered.filter(employee =>
                activeDepartments.includes(employee.dataDepartment)
            );
        }

        setFilteredEmployees(filtered);
    }, [activeDepartments, allEmployees]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>            
            <div className="btn-scrollup absolute-position" style={{ display : 'none'}}>
                <BtnRound iconType="scrollup" onClick={scrollUp}/>
            </div>

            <div className="fade-screen absolute-position"
                style={{ display: selectedEmployee ? 'block' : 'none' }}
                onClick={closeDetail}
            ></div>

            <Header
                ref={headerRef}
                setFilteredEmployees={setFilteredEmployees}
                filteredEmployees={filteredEmployees}
                filterEmployeesByDepartment={filterEmployeesByDepartment}
                selectedFilters={activeDepartments}
                allDepartments={departmentListWithKeys}
                allEmployees={allEmployees}
            />

            <Content
                filteredEmployees={filteredEmployees}
                headerHeight={headerHeight}
                selectedEmployee={selectedEmployee}
                closeDetail={closeDetail}
                openDetail={openDetail}
            />

            {selectedEmployee && (
                <EmployeeDetail
                    employee={selectedEmployee}
                    onClose={handleClose}
                    employees={filteredEmployees}
                    onSelectEmployee={handleSelectEmployee}
                />
            )}
        </div>
    );
}

export default Home;
