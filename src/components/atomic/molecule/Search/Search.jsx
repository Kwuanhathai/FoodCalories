import { Text, Input } from "@atomic";
import React from "react";

const Search = (props) => {
  const { label, fontSize, color, placeholder, onChange } = props;

  return (
    <div>
      <Text fontSize={fontSize} color={color}>
        {label}
      </Text>
      <div>
        <Input placeholder={placeholder} onChange={onChange} />
      </div>
    </div>
  );
};

export default Search;
