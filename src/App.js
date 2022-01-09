import React from "react";
import GetBonus from "./components/Desktop/GetBonus";
import LogoSection from "./components/Desktop/LogoSection";
import MobileLogoSection from "./components/Mobile/MobileLogoSection";
import Vote from "./components/Desktop/Vote";
import WelcomeBonus from "./components/Desktop/WelcomeBonus";
import MobileVoteSection from "./components/Mobile/MobileVoteSection";
import MobileWelcomeBonus from "./components/Mobile/MobileWelcomeBonus";
import MobileGetBonusSection from "./components/Mobile/MobileGetBonusSection";

function App() {
  return (
    <div className="container">
      <div className="desktop-section">
        <LogoSection />
        <WelcomeBonus />
        <Vote />
        <GetBonus />
      </div>
      <div className="mobile-section">
        <div className="mobile-left">
          <MobileLogoSection />
          <MobileVoteSection />
        </div>
        <div className="mobile-right">
          <MobileWelcomeBonus />
          <MobileGetBonusSection />
        </div>
      </div>
    </div>
  );
}

export default App;
