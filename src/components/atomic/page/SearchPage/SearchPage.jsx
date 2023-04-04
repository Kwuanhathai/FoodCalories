import { Text, Search, Card, FoodCard } from "@atomic";
import { Row } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 3.5rem;
`;

const StyleRow = styled(Row)`
  justify-content: center;
  align-items: center;
  height: 9vh;
  padding-bottom: 2rem;
`;

const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const StyleDiv = styled.div`
  height: 9vh;
  width: 60%;
  padding-bottom: 2rem;
`;

const FoodCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
  height: 65vh;
  width: 100%;
`;

const SearchPage = ({ data }) => {
  const [searchText, setSearchText] = useState("");

  const filteredFoodCard = data?.filter((foodCard) => {
    return foodCard?.name?.includes(searchText);
  });

  const foodCardElement = filteredFoodCard?.map((data, index) => {
    return <FoodCard key={index} data={data} />;
  });

  const url = new URL("http://localhost:3000/data.json");
  console.log(url.searchParams.get("name"));

  return (
    <div>
      <CardContainer>
        <Card>
          <StyleRow>
            <Text fontSize={"3.2rem"}>FOOD CALORIES</Text>
          </StyleRow>
          <SearchContainer>
            <StyleDiv>
              <Search
                placeholder={"ค้นหารายการอาหาร"}
                onChange={(event) => {
                  setSearchText(event.target.value);
                }}
              />
            </StyleDiv>
          </SearchContainer>
          <FoodCardContainer>
            <Row>{foodCardElement}</Row>
          </FoodCardContainer>
        </Card>
      </CardContainer>
    </div>
  );
};

export default SearchPage;
