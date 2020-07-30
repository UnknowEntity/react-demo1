import React from "react";
import "./style.css";

const Button = (props) => {
  const { onClick, child = "Missing Content", classBtn = "" } = props;
  return (
    <button onClick={onClick} className={classBtn}>
      {child}
    </button>
  );
};

export default Button;
