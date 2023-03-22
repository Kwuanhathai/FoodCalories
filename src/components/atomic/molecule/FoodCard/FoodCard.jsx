import { Card, Image } from "@atomic";

const FoodCard = (props) => {
  const { name, src } = props;

  return (
    <div>
      <Card>
        <Image src={src} />
        <Text>{name}</Text>
      </Card>
    </div>
  );
};

export default FoodCard;
