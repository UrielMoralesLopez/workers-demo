import React from 'react'
import './BtnRound.css'

function BtnRound({ iconType, onClick }) {
    const iconSrc = {
        close: "./images/icon_close.png",
        back: "./images/icon_back.png",
        logout: "./images/icon_logout.png",
        scrollup: "./images/icon_scrollup.png"
      };

  return (
    <button type="button" className="btn-round my-1" onClick={onClick}>
        <img src={iconSrc[iconType] || "./images/default.png"} alt={iconType} className="absolute-position" />
    </button>
  )
}

export default BtnRound;