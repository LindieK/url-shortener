import React from "react";
import PropTypes from "prop-types";

import "./Input.scss";

const Input = ({ value, onChange, formFieldValid }) => {
  return (
    <input
      data-testid="input"
      placeholder="Shorten a link here..."
      value={value}
      onChange={onChange}
      className={formFieldValid ? null : "error"}
    />
  );
};
export default Input;
Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  formFieldValid: PropTypes.bool,
};
