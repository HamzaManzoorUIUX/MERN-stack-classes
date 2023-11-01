import React from "react";
import Logo from '../assets/svg/hmzonesLogo.svg'
const NavBar = () => {
  return (
    <>
      <nav className="main-nav">
        <a href="/" className="brand-logo">
          <img src={Logo} alt="Logog" />
        </a>
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
      </nav>
    </>
  );
};

export default NavBar;
