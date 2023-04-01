import { Text, Search, Card } from "@atomic";
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
            <Search data={data} />
          </Col>
        </Row>
        <Row>{foodCardElement}</Row>
      </Card>
    </div>
  );
};

export default SearchPage;
