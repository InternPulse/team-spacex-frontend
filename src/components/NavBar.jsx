import React from "react";
import DarkButton from "./DarkButton";
import { LeftLogoImg, RightLogoImg } from "../assets";

const NavBar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-logo-box">
          <img src={LeftLogoImg} alt="left-logo" />

          <img src={RightLogoImg} alt="right-logo" />
        </div>

        <DarkButton />
      </nav>
    </header>
  );
};

export default NavBar;
