import React, { useState } from "react";
import Image from "../../components/atoms/image";
import LoginForm from "../../components/organisms/loginForm";
import SmallCenter from "../../components/templates/smallCenter";

const Login = () => {
  const [username, changeUsername] = useState("");
  const [password, changePassword] = useState("");
  const onSubmit = (username, password) => {
    console.log({ username, password });
  };

  return (
    <div>
      <SmallCenter
        background={Image({ src: "/background.jpg" })}
        title={Image({ src: "/icon.png" })}
        center={LoginForm({
          data: { username, password },
          onChanges: { changeUsername, changePassword },
          onSubmit: () => onSubmit(username, password),
        })}
      />
    </div>
  );
};

export default Login;
