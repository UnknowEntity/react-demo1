import React from "react";
import "./style.css";

const Text = (props) => {
  const {
    content = "Missing Text",
    size = "12pt",
    color = "black",
    classText = "",
  } = props;
  return (
    <div
      style={{ color: color, fontSize: size }}
      className={`text ${classText}`}
    >
      {content}
    </div>
  );
};

export default Text;
