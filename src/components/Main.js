import RestaurantFood from "../assets/restauranfood.jpg";
import Button from "./Button";
import Description from "./Description.json";
const Main = () => {
  const styles = {
    logo: {
      height: "200px",
      width: "200px",
    },
    spcl: {
      display: "flex",
      justifyContent: "space-between",
      gap: "10px",
    },
  };
  return (
    <main>
      <article>
        <p>Little Lemon</p>
        <p>Chicago</p>
        <p>{Description.TitleDescription}</p>
        <Button text="Reserve a Table" />
        <img style={styles.logo} src={RestaurantFood} alt="Restaurant food" />
      </article>
    </main>
  );
};
export default Main;
