import React from "react";
import PropTypes from "prop-types";

import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Form.scss";

const Form = ({
  value,
  errorMessage,
  formFieldValidState,
  onChange,
  onSubmit,
}) => {
  return (
    <>
      <form data-testid="form" onSubmit={onSubmit}>
        <div className="form">
          <Input
            value={value}
            onChange={onChange}
            formFieldValid={formFieldValidState}
          />
          <Button type="submit" value="Shorten It!" />
        </div>
        <p id="error">{errorMessage}</p>
      </form>
    </>
  );
};
export default Form;
Form.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  errorMessage: PropTypes.string,
  formFieldValidState: PropTypes.bool,
};
