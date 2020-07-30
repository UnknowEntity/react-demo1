import React from "react";

const Text = (props) => {
  const { content = "Missing Text", size = "12pt", color = "black" } = props;
  return <div style={{ color: color, fontSize: size }}>{content}</div>;
};

export default Text;
