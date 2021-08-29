import React from "react";
import PropTypes from "prop-types";

import "./HamburgerMenu.scss";

const HamburgerMenu = ({ showNav }) => {
  return (
    <div
      data-testid="hamburger"
      id="hamburger-menu"
      className={showNav ? "showNav" : "hideNav"}
    >
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
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#" className="btn">
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default HamburgerMenu;
HamburgerMenu.propTypes = {
  showNav: PropTypes.bool,
};
