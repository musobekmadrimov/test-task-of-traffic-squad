import React from "react";
import StarOn from '../images/star-on.png'
import StarOff from '../images/star-off.png'

export default function Vote() {
  return (
    <div className="voting-section">
      <div className="voting-section-top">
        <span>Please vote!</span>
      </div>
      <div className="voting-section-middle">
        <img src={StarOn} alt="Star" />
        <img src={StarOn} alt="Star" />
        <img src={StarOn} alt="Star" />
        <img src={StarOn} alt="Star" />
        <img src={StarOff} alt="Star" />
      </div>
      <div className="voting-section-bottom">
        <span>Rated by (3,904)</span>
      </div>
    </div>
  );
}
