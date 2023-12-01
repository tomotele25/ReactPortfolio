import React from "react";

import "./input.css";
import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, value, setValue, ...props },
  ref
) {
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <div className="form">
        <label>{label}</label>
        <input ref={ref} type="text" {...props} />
      </div>
    </div>
  );
});

export default Input;
