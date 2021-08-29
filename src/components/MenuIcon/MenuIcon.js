import React from "react";
import PropTypes from "prop-types";

import "./MenuIcon.scss";

const MenuIcon = ({ handleClick }) => {
  return (
    <div data-testid="menu-icon" id="menu-icon" onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
export default MenuIcon;
MenuIcon.propTypes = {
  handleClick: PropTypes.func,
};
