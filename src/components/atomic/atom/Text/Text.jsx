import { Typography } from "antd";

const { Text: TextAntd } = Typography;

const Text = (props) => {
  return <TextAntd {...props}>{children}</TextAntd>;
};

export default Text;
