import React from "react";
import InputText from "../../atoms/inputText";
import Text from "../../atoms/text";
import "./style.css";

const InputFormVertical = (props) => {
  const { text, value, onChange, type, disable, classInput = "" } = props;
  return (
    <div className={"input-form-ver"}>
      <Text content={`${text}:`} classText={`m ${classInput}`} />
      <InputText
        value={value}
        onChange={onChange}
        type={type}
        disable={disable}
      />
    </div>
  );
};

export default InputFormVertical;
