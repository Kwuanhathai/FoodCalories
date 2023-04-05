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

const Styled404PageDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  margin-top: 3rem;
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
          <Styled404PageDetail>
            <Icon name={"frown"} size={"19vw"} />
            <Text fontSize={"7vw"}>404 Not found</Text>
            <Text fontSize={"2.2vw"}>Sorry, cannot find this page</Text>
            <ButtonContainer>
              <Button size={"large"} onClick={goBack}>
                GO BACK
              </Button>
            </ButtonContainer>
          </Styled404PageDetail>
        </Card>
      </CardContainer>
    </div>
  );
};

export default ErrorPage;
