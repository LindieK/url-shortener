/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import MenuIcon from "../MenuIcon/MenuIcon";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import logo from "../../images/logo.svg";
import "./Nav.scss";

const Nav = () => {
  const [showNavState, setShowNavState] = useState(false);

  const { showNav } = showNavState;

  const togggleMenu = () => {
    showNav
      ? setShowNavState({ showNav: false })
      : setShowNavState({ showNav: true });
  };

  return (
    <>
      <header data-testid="header-nav">
        <div id="header-left">
          <div id="logo">
            <img src={logo} alt="logo" />
          </div>
          <nav>
            <ul>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="header-right">
          <button id="login-btn">Login</button>
          <button id="signup-btn" className="btn">
            Sign Up
          </button>
        </div>
        <MenuIcon handleClick={togggleMenu} />
      </header>

      <HamburgerMenu showNav={showNav} />
    </>
  );
};
export default Nav;
