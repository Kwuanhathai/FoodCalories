import { Input as InputAntd } from "antd";
import React from "react";

const Input = (props) => {
  const { placeholder, onChange } = props;

  return <InputAntd placeholder={placeholder} onChange={onChange} />;
};

export default Input;
