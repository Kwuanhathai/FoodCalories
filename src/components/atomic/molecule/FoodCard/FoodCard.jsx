import { Card, Image, Text } from "@atomic";
import React from "react";

const FoodCard = (props) => {
  const { data } = props;

  return (
    <div>
      <Card>
        <Image src={data.image} />
        <Text>{data.name}</Text>
      </Card>
    </div>
  );
};

export default FoodCard;
