import React from "react";
import PropTypes from "prop-types";

import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Form.scss";

const Form = ({
  loading,
  value,
  errorMessage,
  formFieldValid,
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
            formFieldValid={formFieldValid}
          />
          <Button type="submit" value="Shorten It!" loading={loading} />
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
