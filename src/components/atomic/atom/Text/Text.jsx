import { Typography } from "antd";
import styled from "styled-components";
import React from "react";

const { Text: TextAntd } = Typography;

const StyledText = styled(TextAntd)`
  font-size: ${(props) => props?.fontSize || "1.6 rem"};
  color: ${(props) => props?.color || "black"};
  text-align: center;
`;

const Text = (props) => {
  const { fontSize, color, children } = props;

  return (
    <StyledText fontSize={fontSize} color={color}>
      {children}
    </StyledText>
  );
};

export default Text;
