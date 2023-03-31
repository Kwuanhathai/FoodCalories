import { Input as InputAntd } from "antd";
import React from "react";

const Input = (props) => {
  const { placeholder, value } = props;

  return <InputAntd placeholder={placeholder} value={value} />;
};

export default Input;
