import RestaurantFood from "../assets/restauranfood.jpg";
import Button from "./Button";
import Description from "./Description.json";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-description">
        <h2>Little Lemon</h2>
        <p>Chicago</p>
        <p>{Description.TitleDescription}</p>
        <Button text="Reserve a Table" />
      </div>
      <img src={RestaurantFood} alt="Restaurant food" />
    </div>
  );
};
export default Hero;
