import { Card as CardAntd } from "antd";
import styled from "styled-components";
import React from "react";

const StyledCard = styled(CardAntd)`
  width: ${(props) => props?.width || "20rem"};
  padding: ${(props) => props?.padding || "1rem"};
  border-radius: ${(props) => props?.border_radius};
`;

const Card = (props) => {
  const { children, width, border_radius, padding } = props;

  return (
    <StyledCard
      hoverable
      width={width}
      border_radius={border_radius}
      padding={padding}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
