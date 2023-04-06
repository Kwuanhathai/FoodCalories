import { Card as CardAntd } from "antd";
import styled from "styled-components";
import React from "react";

const StyledCard = styled(CardAntd)`
  width: ${(props) => props?.width || "95vw"};
  height: ${(props) => props?.height || "90vh"};
  padding: ${(props) => props?.padding || "1rem"};
  border-radius: ${(props) => props?.border_radius || "2rem"};
  background-color: ${(props) => props?.background_color || "whilt"};
`;

const Card = (props) => {
  const { children, width, height, border_radius, padding, background_color } =
    props;

  return (
    <StyledCard
      hoverable
      width={width}
      height={height}
      border_radius={border_radius}
      padding={padding}
      background_color={background_color}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
