import React from "react";
import "./style.css";

const FormText = (props) => {
  const { value, onChange, type = "text", disable = false } = props;

  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type={type}
      disabled={disable}
    />
  );
};

export default FormText;
