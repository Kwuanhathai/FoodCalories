import { Text, DropdownMenu, Search, Card } from "@atomic";
import { Col, Row } from "antd";
import React from "react";

const SearchPage = (props) => {
  const { data, foodCardElement } = props;

  return (
    <div>
      <Card>
        <Text>FOOD CALORIES</Text>
        <Row>
          <Col>
            <DropdownMenu items={data} label={"ประเภทอาหาร"} />
          </Col>
          <Col>
            <Search />
          </Col>
        </Row>
        <Row>{foodCardElement}</Row>
      </Card>
    </div>
  );
};

export default SearchPage;
