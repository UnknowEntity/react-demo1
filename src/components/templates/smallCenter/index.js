import React from "react";
import "./style.css";

const SmallCenter = (props) => {
  const { background, title, center, footer = <div></div> } = props;
  return (
    <div>
      <div className="background">{background}</div>
      <div className={"frame"}>
        <div className="center">
          <div className={"title"}>{title}</div>
          <div className={"center-block"}>{center}</div>
        </div>
      </div>
      <div className="footer">{footer}</div>
    </div>
  );
};

export default SmallCenter;
