import React from "react";
import { Card, Icon, Text, Button } from "@atomic";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 5vh;
  bottom: 5rem;
`;

const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  padding-top: 5%;
`;

const TextnBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
  padding: 3%;
`;

const ButtonBox = styled.div`
  margin-top: 3rem;
  height: 10vh;
`;

const ErrorPage = () => {
  let navigate = useNavigate();

  const goBack = () => {
    navigate(`/`, { replace: true });
  };

  return (
    <div>
      <CardContainer>
        <Card width={"85vw"} height={"90vh"} border_radius={"4.5em"}>
          <ErrorPageContainer>
            <IconBox>
              <Icon name={"frown"} size={"20rem"} />
            </IconBox>
            <TextnBox>
              <Text fontSize={"4.8rem"}>404</Text>
              <Text fontSize={"3.6rem"}>Not found</Text>
              {/* </TextnBox>
            <TextnBox> */}
              <Text fontSize={"2.2rem"}>Sorry, cannot find this page</Text>
            </TextnBox>
            <ButtonBox>
              <Button size={"large"} onClick={goBack}>
                GO BACK
              </Button>
            </ButtonBox>
          </ErrorPageContainer>
        </Card>
      </CardContainer>
    </div>
  );
};

export default ErrorPage;
