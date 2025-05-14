import EmployeeCard from '../components/EmployeeCard';
import './Content.css';

function Content({ filteredEmployees, headerHeight, openDetail }) {
    return (
        <div className="content" style={{ paddingTop: `${headerHeight + 20}px` }}>
            <div className="container g-0">
                <div className="row g-0 justify-content-center">
                    <div className="col-12 col-md-10">
                        <div className="container">
                            <div className="employee-list row justify-content-center">
                                {filteredEmployees.length > 0 ? (
                                    filteredEmployees.map((employee) => (
                                        <EmployeeCard 
                                        key={employee.id} 
                                        employee={employee} 
                                        dataDepartment={employee.dataDepartment}
                                        onClick={() => openDetail(employee)} 
                                    />
                                    ))
                                ) : (
                                    <p>No employees found</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
