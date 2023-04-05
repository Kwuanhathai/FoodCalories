import React from "react";
import { Button as ButtonAnta } from "antd";

const Button = (props) => {
  const { children, size, onClick } = props;

  return (
    <ButtonAnta size={size} onClick={onClick}>
      {children}
    </ButtonAnta>
  );
};

export default Button;
