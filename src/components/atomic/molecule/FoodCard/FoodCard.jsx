import { Card, Image, Text, Icon } from "@atomic";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const IconContainer = styled.div`
  display: flex;
  justify-content: end;
  padding-bottom: 0.5rem;
`;

const StyledFoodCard = styled.div`
  margin: 2rem;
  justify-content: center;
`;

const TextContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const FoodCard = ({ data }) => {
  let navigate = useNavigate();

  const handleOnIconInfoClick = () => {
    navigate(`calories/${data?.id}`);
  };

  return (
    <StyledFoodCard>
      <Card width={"27rem"} height={"27rem"}>
        <IconContainer>
          <Icon name={"info"} size={"2.5rem"} onClick={handleOnIconInfoClick} />
        </IconContainer>
        <Image src={data.image} width={"20rem"} height={"15rem"} />
        <TextContainer>
          <Text fontSize={"1.4rem"}>{data.name}</Text>
        </TextContainer>
      </Card>
    </StyledFoodCard>
  );
};

export default FoodCard;
