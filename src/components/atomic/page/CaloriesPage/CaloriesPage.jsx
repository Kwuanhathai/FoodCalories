import { Card, Text, Image, Icon } from "@atomic";
import React from "react";

const CaloriesPage = (props) => {
  const { data, onCaloriesPageClick } = props;

  return (
    <div>
      <div className="food-bg" onClick={onCaloriesPageClick}>
        <Card>
          <div>
            <Icon name={"back"} size={"20px"} />
          </div>
          <Text>{data.name}</Text>
          <div>
            <Image src={data.image} />
          </div>
          <Text>{data.cal}</Text>
        </Card>
      </div>
    </div>
  );
};

export default CaloriesPage;
