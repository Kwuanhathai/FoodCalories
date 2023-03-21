import { Card as CardAntd } from "antd";
import styled from "styled-components";

const StyledCard = styled(CardAntd)`
  width: ${(props) => props?.width || "20rem"};
  padding: ${(props) => props?.padding || "1rem"};
  border-radius: ${(props) => props?.borderRadius};
`;

const Card = (props) => {
  const { children, width, borderRadius, padding } = props;

  return (
    <StyledCard
      hoverable
      width={width}
      borderRadius={borderRadius}
      padding={padding}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
