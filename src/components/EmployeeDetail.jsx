import Avatar from '../atoms/Avatar';
import Badge from '../atoms/Badge';
import Btn from '../atoms/Btn';
import BtnRound from '../atoms/BtnRound';
import TeamMemberList from './TeamMemberList';
import './EmployeeDetail.css';

function EmployeeDetail({ employee, onClose, employees, onSelectEmployee }) {
  if (!employee) return null; // Evita renderizar si no hay empleado seleccionado

  return (
    <div className="employee-detail">
      <div className="container employee-detail-container bg-xxwhite">
        <BtnRound iconType="close" onClick={onClose} />
        <div className="row align-items-center justify-content-center">
          <div className="col-11">
            <div className="container g-0">
              <div className="row align-items-center">
                <div className="col-auto g-0 me-2 mb-3">
                  <Avatar avatarSize="lg" employee={employee} />
                </div>
                <div className="col-auto text-left">
                  <h4>{employee.name}</h4>
                  <p>{employee.job}</p>
                  <Badge badgeType="primary" employee={employee} />
                </div>
              </div>
            </div>

            <span className="horizontal-line my-3"></span>
            <p className="text-left">{employee.bio}</p>
            <span className="horizontal-line my-3"></span>

            {/* Información de contacto */}
            <div className="d-inline-flex mt-2 mb-4 w-100">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-6">
                    <div className="my-3 my-lg-0">
                      <Btn type="copy" btnType="primary" text={employee.email} />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="my-3 my-lg-0">
                      <Btn type="copy" btnType="primary" text={employee.phone} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <TeamMemberList 
              employees={employees || []} 
              selectedEmployee={employee} 
              onSelectEmployee={onSelectEmployee} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetail;
