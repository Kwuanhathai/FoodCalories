import { Card, Text, Image, Icon } from "@atomic";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 8vh;
  bottom: 8rem;
`;

const StyledCalPageDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledKcal = styled.div`
  display: flex;
  justify-content: end;
`;

const StyleTitle = styled.div`
  padding-bottom: 2rem;
`;

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
      <CardContainer>
        <Card width={"65%"} height={"90%"} border_radius={"4.5rem"}>
          <div>
            <Icon name={"back"} size={"30px"} onClick={goBack} />
          </div>
          <StyledCalPageDetail>
            <StyleTitle>
              <Text fontSize={"2.2rem"}>{cal[0]?.name}</Text>
            </StyleTitle>
            <div>
              <Image
                src={cal[0]?.image}
                width={"30vw"}
                height={"40vh"}
                border_radius={"2rem"}
              />
            </div>
            <Text fontSize={"8rem"}>{cal[0]?.cal} </Text>{" "}
          </StyledCalPageDetail>
          <StyledKcal>
            <Text fontSize={"1.6rem"}> กิโลแคลอรี่</Text>
          </StyledKcal>
        </Card>
      </CardContainer>
    </div>
  );
};

export default CaloriesPage;
