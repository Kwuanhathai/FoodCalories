import {
  Button as ButtonAntd,
  Space as SpaceAntd,
  Dropdown as DropdownAntd,
} from "antd";
import { DownCircleOutlined } from "@ant-design/icons";

const Dropdown = (props) => {
  const { title = "select", items } = props;

  return (
    <DropdownAntd menu={items}>
      <ButtonAntd>
        <SpaceAntd>
          {title}
          <DownCircleOutlined />
        </SpaceAntd>
      </ButtonAntd>
    </DropdownAntd>
  );
};

export default Dropdown;
