import { Text, Dropdown } from "@atomic";

const DropdownMenu = (props) => {
  const { label, items, title } = props;
  return (
    <div>
      <Text>{label}</Text>
      <div>
        <Dropdown items={items} title={title} />
      </div>
    </div>
  );
};

export default DropdownMenu;
