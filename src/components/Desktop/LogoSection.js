import React from "react";
import Speaker from '../images/speaker.png';
import Logo from '../images/logo.png';

export default function LogoSection() {
  return (
    <div className="logo-brand">
      <div className="top-choice">
        <img src={Speaker} alt="Speaker" />
        <span>OUR TOP CHOICE</span>
      </div>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
}
