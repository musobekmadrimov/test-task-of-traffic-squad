import React from "react";
import FireImage from '../images/fire.png'

export default function GetBonus() {
  return (
    <div className="get-bonus-section">
      <div className="get-bonus-left">
        <span>9.9</span>
      </div>
      <div className="get-bonus-right">
        <a href="/#" className="get-bonus-button" target="_blank" rel="noreferrer">
          Get Bonus
          <img src={FireImage} alt="Fire Icon" />
        </a>
        <a href="/#" className="visit-button" target="_blank" rel="noreferrer">
          Visit William Hill
        </a>
      </div>
    </div>
  );
}
