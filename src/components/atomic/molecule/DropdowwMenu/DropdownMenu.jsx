import { Text, Dropdown } from "@atomic";
import React from "react";

const DropdownMenu = (props) => {
  const { items, label } = props;

  return (
    <div>
      <Text>{label}</Text>
      <div>
        <Dropdown items={items} />
      </div>
    </div>
  );
};

export default DropdownMenu;
