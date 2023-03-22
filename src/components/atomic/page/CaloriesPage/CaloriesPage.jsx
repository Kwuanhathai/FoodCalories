import { Card, Text, Image } from "@atomic";

const CaloriesPage = (props) => {
  const {} = props;

  return (
    <div>
      <Card>
        <Text>{CalFood.name}</Text>
        <Image src={CalFood.image} />
        <Text>{CalFood.cal}</Text>
      </Card>
    </div>
  );
};

export default CaloriesPage;
