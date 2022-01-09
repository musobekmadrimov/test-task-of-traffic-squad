import React from "react";
import Speaker from '../images/speaker.png';
import Logo from '../images/logo.png';


export default function MobileLogoSection() {
  return (
    <div className="mobile-logo-brand">
      <div className="mobile-top-choice">
        <img src={Speaker} alt="Speaker" />
        <span>OUR TOP CHOICE</span>
      </div>
      <div className="mobile-logo">
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
}
