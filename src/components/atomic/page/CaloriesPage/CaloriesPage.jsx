import { Card, Text, Image } from "@atomic";
import React from "react";

const CaloriesPage = (props) => {
  const { value, onCaloriesPageClick } = props;

  return (
    <div>
      <div className="food-bg" onClick={onCaloriesPageClick}>
        <Card>
          <Text>{value.name}</Text>
          <Image src={value.image} />
          <Text>{value.cal}</Text>
        </Card>
      </div>
    </div>
  );
};

export default CaloriesPage;
