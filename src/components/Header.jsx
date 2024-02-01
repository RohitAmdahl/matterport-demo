import React from "react";
import logo from "../assets/MP-logoTM_V_lock-RGB_color-white.png";
const Header = () => {
  return (
    <header>
      <nav className="flex justify-center items-center">
        <img src={logo} alt="matterport logo" className="w-40 max-h-40 p-8 " />
      </nav>
    </header>
  );
};

export default Header;
