import React from "react";
import InputFromVertical from "../../molecules/inputFormVertical";
import Button from "../../atoms/button";
import "./style.css";

const LoginForm = (props) => {
  const { data, onChanges, onSubmit } = props;
  const { username, password } = data;
  const { changeUsername, changePassword } = onChanges;

  return (
    <div className={"login-form"}>
      <InputFromVertical
        text={"Username"}
        value={username}
        onChange={changeUsername}
        classInput={"s-m"}
      />
      <InputFromVertical
        text={"Password"}
        value={password}
        onChange={changePassword}
        type={"password"}
        classInput={"s-l"}
      />
      <div className={"login-btn"}>
        <Button
          child={"Login"}
          onClick={onSubmit}
          classBtn={"color-green s-l"}
        />
      </div>
    </div>
  );
};

export default LoginForm;
