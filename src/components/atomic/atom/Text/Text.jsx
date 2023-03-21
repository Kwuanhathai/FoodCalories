import { Typography } from "antd";
import styled from "styled-components";

const { Text: TextAntd } = Typography;

const StyledText = styled(TextAntd)`
  font-size: ${(props) => props?.fontSize || "1.6 rem"};
  color: ${(props) => props?.color || "black"};
`;

const Text = (props) => {
  return (
    <StyledText fontSize={fontSize} color={color}>
      {children}
    </StyledText>
  );
};

export default Text;
