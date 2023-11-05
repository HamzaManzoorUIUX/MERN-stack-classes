import React, { FC } from "react";

const NavBar: FC<{ title: string }> = ({ title }) => {
  return (
    <nav className="main-nav">
      <a href="/" className="brand-logo text-logo">
       {title}
      </a>
      <ul className="nav-bar-menu">
        <li>
          <a href="/">a</a>
        </li>
        <li>
          <a href="/">b</a>
        </li>
        <li>
          <a href="/">c</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
