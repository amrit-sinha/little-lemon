import Card from "./Card";
import GreekSalad from "../assets/greek salad.jpg";
import Bruchetta from "../assets/bruchetta.svg";
import LemonDessert from "../assets/lemon dessert.jpg";
import Description from "./Description.json";
import Button from "./Button";
const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: "20px",
    font: "40px",
  },
  cards: {
    display: "flex",
    justifyItems: "center",
    gap: "1rem",
  },
};
const Specials = () => {
  return (
    <div className="specials">
      <div className="specials-header" style={styles.header}>
        <h2>This weeks specials!</h2>
        <Button text="Online Menu" />
      </div>
      <div className="specials-cards" style={styles.cards}>
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
