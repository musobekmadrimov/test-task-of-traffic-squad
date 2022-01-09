import React from "react";
import StarOn from '../images/star-on.png'
import StarOff from '../images/star-off.png'

export default function MobileVoteSection() {
  return (
    <div className="mobile-voting-section">
      <div className="mobile-voting-top">
        <div className="voting-stars">
        <img src={StarOn} alt="Star" />
        <img src={StarOn} alt="Star" />
        <img src={StarOn} alt="Star" />
        <img src={StarOn} alt="Star" />
        <img src={StarOff} alt="Star" />
        </div>
        <div className="voting-score">
          <span>9.7</span>
        </div>
      </div>
      <div className="mobile-voting-bottom">
        <span>Rated by (3,904)</span>
      </div>
    </div>
  );
}
