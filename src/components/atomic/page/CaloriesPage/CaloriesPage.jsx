import { Card, Text, Image, Icon } from "@atomic";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 5vh;
  bottom: 5vh;
`;

const IconBox = styled.div`
  height: 8vh;
  width: 85vw;
`;

const StyledCalPageDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleBox = styled.div`
  height: 12vh;
`;

const ImageBox = styled.div`
  height: 40vh;
`;

const CaloriesBox = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledKcal = styled.div`
  display: flex;
  justify-content: end;
  height: 7vh;
`;

const CaloriesPage = () => {
  const [cal, setCal] = useState({});
  const { calID } = useParams();

  async function getCalories(caloriesID) {
    const response = await fetch(
      `https://food-calories-9.netlify.app/data/id${caloriesID}.json`
    );
    const caloriesData = await response.json();
    setCal(caloriesData);
  }

  useEffect(() => {
    getCalories(calID);
  }, [calID]);

  let navigate = useNavigate();

  const goBack = () => {
    navigate(`/`);
  };

  return (
    <div>
      <CardContainer>
        <Card
          width={"80vw"}
          height={"90vh"}
          border_radius={"4.5rem"}
          background_color={"rgba(212, 195, 207, 0.957)"}
        >
          <IconBox>
            <Icon name={"back"} size={"3rem"} onClick={goBack} />
          </IconBox>
          <StyledCalPageDetail>
            <TitleBox>
              <Text fontSize={"2rem"}>{cal[0]?.name}</Text>
            </TitleBox>
            <ImageBox>
              <Image
                src={cal[0]?.image}
                width={"30vw"}
                height={"40vh"}
                border_radius={"2rem"}
              />
            </ImageBox>
            <CaloriesBox>
              <Text fontSize={"7rem"}>{cal[0]?.cal} </Text>
            </CaloriesBox>
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
