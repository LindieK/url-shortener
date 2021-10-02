import React from "react";
import PropTypes from "prop-types";

import "./MenuIcon.scss";

const MenuIcon = ({ handleClick, menuOpen }) => {
  return (
    <div
      data-testid="menu-icon"
      id="menu-icon"
      className={menuOpen ? "open" : ""}
      onClick={handleClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
export default MenuIcon;
MenuIcon.propTypes = {
  handleClick: PropTypes.func,
  menuOpen: PropTypes.bool,
};
