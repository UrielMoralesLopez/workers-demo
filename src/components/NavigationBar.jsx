import React from 'react';
import BtnRound from '../atoms/BtnRound';
import './NavigationBar.css';

function NavigationBar({ onClose }) {
  return (
    <div className="container g-0">
        <div className="row align-items-center g-0">
            <div className="col-auto me-2">
                {/* <BtnRound iconType="back" onClick={onClose}/> */}
            </div>
            <div className="col-auto">
                <img src="images/logo_light.png" className="logo-main" />  
            </div>
        </div>
    </div>
  )
}

export default NavigationBar