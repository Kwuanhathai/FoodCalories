import { Text, DropdownMenu, Search, FoodCard, Card } from "@atomic";
import { Col, Row } from "antd";

const SearchPage = () => {
  return (
    <div>
      <Card>
        <Text>CALORIES IN FOOD</Text>
        <Row>
          <Col>
            <DropdownMenu />
          </Col>
          <Col>
            <Search />
          </Col>
        </Row>
        <Row>
          <FoodCard />
        </Row>
      </Card>
    </div>
  );
};

export default SearchPage;
