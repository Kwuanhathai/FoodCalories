import { Card, Image, Text, Icon } from "@atomic";
import React from "react";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ data }) => {
  let navigate = useNavigate();

  const handleOnIconInfoClick = () => {
    navigate(`calories/${data?.id}`, { replace: true });
  };

  return (
    <div>
      <Card width={"320px"}>
        <div>
          <Icon name={"info"} size={"20px"} onClick={handleOnIconInfoClick} />
        </div>
        <Image src={data.image} width={"250px"} height={"200px"} />
        <Text>{data.name}</Text>
      </Card>
    </div>
  );
};

export default FoodCard;
