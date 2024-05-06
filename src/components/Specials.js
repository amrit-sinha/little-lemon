import Card from "./Card";
import GreekSalad from "../assets/greek salad.jpg";
import Bruchetta from "../assets/bruchetta.svg";
import LemonDessert from "../assets/lemon dessert.jpg";
import Description from "./Description.json";
import Button from "./Button";
const Specials = () => {
  return (
    <div className="specials-container">
      <div className="specials-header">
        <h2>This weeks specials!</h2>
        <Button text="Online Menu" />
      </div>
      <div className="specials-cards">
        <Card
          title={"Greek Salad"}
          description={Description.GreekSalad}
          price={"$12.99"}
          imageSrc={GreekSalad}
        />
        <Card
          title={"Bruschetta"}
          description={Description.Bruschetta}
          price={"$12.99"}
          imageSrc={Bruchetta}
        />
        <Card
          title={"Lemon Dessert"}
          description={Description.LemonDessert}
          price={"$12.99"}
          imageSrc={LemonDessert}
        />
      </div>
    </div>
  );
};
export default Specials;
