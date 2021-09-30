import React from "react";
import PropTypes from "prop-types";

import "./Button.scss";

const Button = ({ value, type, classNames, handleClick }) => {
  const classes = `btn ${classNames}`;
  return (
    <button
      data-testid="button"
      className={classes}
      type={type}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};
export default Button;
Button.propTypes = {
  value: PropTypes.string,
  handleClick: PropTypes.func,
  type: PropTypes.string,
  classNames: PropTypes.string,
};
