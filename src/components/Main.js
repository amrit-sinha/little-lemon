import RestaurantFood from "../assets/restauranfood.jpg";
import GreekSalad from "../assets/greek salad.jpg";
import Bruchetta from "../assets/bruchetta.svg";
import LemonDessert from "../assets/lemon dessert.jpg";
import Button from "./Button";
const Main = () => {
  const styles = {
    logo: {
      height: "200px",
      width: "200px",
    },
  };
  return (
    <main>
      <article>
        <p>Little Lemon</p>
        <p>Chicago</p>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist
        </p>
        <Button text="Reserve a Table" />
        <img style={styles.logo} src={RestaurantFood} alt="Restaurant food" />
      </article>
      <article>
      <Button text="Online Menu" />
        <img style={styles.logo} src={GreekSalad} alt="GreekSalad" />
        <img style={styles.logo} src={Bruchetta} alt="GreekSalad" />
        <img style={styles.logo} src={LemonDessert} alt="GreekSalad" />
      </article>
    </main>
  );
};
export default Main;
