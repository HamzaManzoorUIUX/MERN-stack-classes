import React, { FC, useEffect, useState } from "react";

const NavBar: FC<{ title: string }> = ({ title }) => {
  const [navScroll, setNavScroll] = useState(false);
  // const [navScroll2, setNavScroll2] = useState(false);
  const scrollFunc=() => {
    console.log('ok');
    
    if (window.scrollY > window.innerHeight) {
      setNavScroll(true);
    } else if (window.scrollY < window.innerHeight) {
      setNavScroll(false);
    }
  }
  useEffect(() => {
   window.addEventListener("scroll", scrollFunc);
   return ()=>{
    window.removeEventListener('scroll',scrollFunc)
   }
  }, []);
  // useEffect(() => {
  //   console.log("on anavscroll change");
  // }, [navScroll]);
  // useEffect(() => {
  //   console.log("on any change");
  // });
  return (
    <nav
      className={`main-nav ${navScroll ? "scrolled-nav" : ""}`}
      onClick={() => setNavScroll(true)}
    >
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
