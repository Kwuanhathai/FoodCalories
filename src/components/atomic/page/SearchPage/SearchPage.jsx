import { Text, Search, Card, FoodCard } from "@atomic";
import { Col, Row } from "antd";
import React, { useState } from "react";

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
      <Card>
        <Text>FOOD CALORIES</Text>
        <Row>
          <Search
            placeholder={"ค้นหารายการอาหาร"}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
        </Row>
        <Row>
          <Col>{foodCardElement}</Col>
        </Row>
      </Card>
    </div>
  );
};

export default SearchPage;
