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
      />
      <InputFromVertical
        text={"Password"}
        value={password}
        onChange={changePassword}
        type={"password"}
      />
      <Button child={"Login"} onClick={onSubmit} classBtn={"color-green"} />
    </div>
  );
};

export default LoginForm;
