import React from "react";
import InputText from "../../atoms/inputText";
import Text from "../../atoms/text";
import "./style.css";

const InputFormHorizontal = (props) => {
  const { text, value, onChange } = props;
  return (
    <div className={"input-form-hor"}>
      <Text content={`${text}:`} />
      <InputText value={value} onChange={onChange} />
    </div>
  );
};

export default InputFormHorizontal;
