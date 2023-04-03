import { Card, Text, Image, Icon } from "@atomic";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CaloriesPage = () => {
  const [cal, setCal] = useState({});
  const { calID } = useParams();

  async function getCalories(caloriesID) {
    const response = await fetch(
      `http://localhost:3000/data/id${caloriesID}.json`
    );
    const caloriesData = await response.json();
    setCal(caloriesData);
  }

  useEffect(() => {
    getCalories(calID);
  }, [calID]);

  let navigate = useNavigate();

  const goBack = () => {
    navigate(`/`, { replace: true });
  };

  return (
    <div>
      <div className="food-bg">
        <Card>
          <div>
            <Icon name={"back"} size={"30px"} onClick={goBack} />
          </div>
          <Text>{cal[0]?.name}</Text>
          <div>
            <Image src={cal[0]?.image} />
          </div>
          <Text>{cal[0]?.cal}</Text>
        </Card>
      </div>
    </div>
  );
};

export default CaloriesPage;
