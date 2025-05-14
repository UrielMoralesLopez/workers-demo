// TeamMemberList.js
import React from 'react';
import Avatar from '../atoms/Avatar';
import './TeamMemberList.css';

function TeamMemberList({ employees, selectedEmployee, onSelectEmployee }) {
    // Filtrar los empleados que trabajan en el mismo departamento
    const teamMembers = employees && selectedEmployee
        ? employees.filter(employee => 
            employee.dataDepartment === selectedEmployee.dataDepartment && employee.id !== selectedEmployee.id
        )
        : [];

    // Si no hay miembros en el departamento, no renderizar nada
    if (teamMembers.length === 0) {
        return null;
    }

    return (
        <div className="team-member-list">
            <h5 className="text-left">Department members:</h5>
            <div className="container">
                <div className="row">
                    {teamMembers.map(member => (
                        <div className="col-auto" key={member.id} onClick={() => onSelectEmployee(member)}>
                            <div className="team-member-item text-center">
                                <Avatar avatarSize="xs" employee={member} />
                                <p>{member.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TeamMemberList;
