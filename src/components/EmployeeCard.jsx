import React from 'react';
import './EmployeeCard.css';
import Avatar from '../atoms/Avatar';
import Badge from '../atoms/Badge';
import Btn from '../atoms/Btn';

function EmployeeCard({ employee, dataDepartment, onClick }) {
  return (
    <div 
      id={employee.id} 
      className="d-flex flex-row justify-content-center align-items-center employee-card bg-xxwhite"
      data-department={dataDepartment} 
    >
      <div className="container wrapper text-center" tabIndex="0">
        <div className="row text-center g-0">
          <div className="col-12">
            <Avatar avatarSize="sm" employee={employee} onClick={onClick}/>
            <h4 className="employee-name">
              {(() => {
                const nameParts = employee.name.split(' '); // Divide el nombre en palabras
                return nameParts.length === 2 
                  ? <>{nameParts[0]}<br />{nameParts[1]}</>  // Si tiene dos palabras, inserta <br>
                  : employee.name;  // Si no, muestra el nombre normal
              })()}
            </h4>
            <p className="employee-job">{employee.job}</p>
            <Badge badgeType="primary" employee={employee} />
            <div className="container bg-xxgreylight my-2 py-1">
              <div className="row py-2">
                <div className="employee-card-group d-flex align-items-center justify-content-start">
                  <img className="me-2" src={`${process.env.PUBLIC_URL}/images/icon_email.png`} alt="Email Icon"/>
                  <p>Email</p>
                </div>
              </div>
              <div className="row">
                {employee.email && <Btn type="copy" btnType="copy btn-xs" text={employee.email} />}
              </div>
            </div>
            <div className="container bg-xxgreylight my-2 py-1">
              <div className="row py-2">
                <div className="employee-card-group d-flex align-items-center justify-content-start">
                  <img className="me-2" src={`${process.env.PUBLIC_URL}/images/icon_phone.png`} alt="Phone Icon" />
                  <p>Phone</p>
                </div>
              </div>
              <div className="row">
                {employee.phone && <Btn type="copy" btnType="copy" text={employee.phone} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;
