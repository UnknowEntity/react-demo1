import React from "react";
import "./style.css";

const SmallCenter = (props) => {
  const { background, title, center, footer = <div></div> } = props;
  return (
    <div>
      <div className="background">{background}</div>
      <div className="center">
        <div>{title}</div>
        <div>{center}</div>
      </div>
      <div className="footer">{footer}</div>
    </div>
  );
};

export default SmallCenter;
