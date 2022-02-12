import React from "react";
import PropTypes from "prop-types";

import Spinner from "../Spinner/Spinner";
import "./Button.scss";

const Button = ({ loading, value, type, classNames, handleClick }) => {
  const classes = `btn ${classNames}`;
  return (
    <button
      data-testid="button"
      className={classes}
      type={type}
      onClick={handleClick}
    >
      {loading ? <Spinner /> : value}
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
