import React from "react";
import { InfoCircleOutlined, BackwardOutlined } from "@ant-design/icons";

const getIcon = (name) => {
  const Icons = {
    info: InfoCircleOutlined,
    back: BackwardOutlined,
  };

  const icon = Icons[name] || <div />;

  return icon;
};

const Icon = (props) => {
  const { name, size, onClick } = props;
  const Icon = getIcon(name);

  return <Icon style={{ fontSize: size }} onClick={onClick} />;
};

export default Icon;
