import { Card as CardAntd } from "antd";
import styled from "styled-components";
import React from "react";

const StyledCard = styled(CardAntd)`
  width: ${(props) => props?.width || "105rem"};
  height: ${(props) => props?.height || "90vh"};
  padding: ${(props) => props?.padding || "1rem"};
  border-radius: ${(props) => props?.border_radius};
`;

const Card = (props) => {
  const { children, width, height, border_radius, padding } = props;

  return (
    <StyledCard
      hoverable
      width={width}
      height={height}
      border_radius={border_radius}
      padding={padding}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
