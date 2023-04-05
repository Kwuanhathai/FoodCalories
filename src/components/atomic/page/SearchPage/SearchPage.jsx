import { Text, Search, Card, FoodCard } from "@atomic";
import { Row } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 2.5vw;
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

const SearchDiv = styled.div`
  height: 9vh;
  width: 60%;
  margin-bottom: 0.5vh;
`;

const FoodCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow-x: hidden;
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
            <Text fontSize={"3vw"}>FOOD CALORIES</Text>
          </StyleRow>
          <SearchContainer>
            <SearchDiv>
              <Search
                placeholder={"ค้นหารายการอาหาร"}
                onChange={(event) => {
                  setSearchText(event.target.value);
                }}
              />
            </SearchDiv>
          </SearchContainer>
          <FoodCardContainer>{foodCardElement}</FoodCardContainer>
        </Card>
      </CardContainer>
    </div>
  );
};

export default SearchPage;
