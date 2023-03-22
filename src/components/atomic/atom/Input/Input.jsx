import { Input as InputAntd } from "antd";

const Input = (props) => {
  const { placeholder, value } = props;

  return <InputAntd placeholder={placeholder} value={value} />;
};

export default Input;
