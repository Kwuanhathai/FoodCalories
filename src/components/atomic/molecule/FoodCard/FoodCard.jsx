import { Card, Image, Text, Icon } from "@atomic";
import React from "react";

const FoodCard = (props) => {
  const { data } = props;

  return (
    <div>
      <Card width={"320px"}>
        <div>
          <Icon name={"info"} size={"20px"} />
        </div>
        <Image src={data.image} width={"250px"} height={"200px"} />
        <Text>{data.name}</Text>
      </Card>
    </div>
  );
};

export default FoodCard;
