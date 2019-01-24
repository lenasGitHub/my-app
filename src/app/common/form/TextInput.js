import React from "react";
import { Form, Label } from "semantic-ui-react";

const TextInput = ({
  input,
  width,
  type,
  placeholder,
  label,
  meta: { touched, error }
}) => {
  return (
    <div
      className="form-group col-md-12"
      error={touched && !!error}
      width={width}
    >
      <label>{label}</label>
      <input
        className="StripeForm-input-container StripeElement StripeElement--empty"
        {...input}
        placeholder={placeholder}
        type={type}
      />
      {touched && error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
    </div>
  );
};

export default TextInput;
