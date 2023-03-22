import { Text, Input } from "@atomic";

const Search = (props) => {
  const { label, fontSize, color, placeholder, value } = props;

  return (
    <div>
      <Text fontSize={fontSize} color={color}>
        {label}
      </Text>
      <div>
        <Input placeholder={placeholder} value={value} />
      </div>
    </div>
  );
};

export default Search;
