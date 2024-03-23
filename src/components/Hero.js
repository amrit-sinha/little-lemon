import RestaurantFood from "../assets/restauranfood.jpg";
import Button from "./Button";
import Description from "./Description.json";
const Hero = () => {
  const styles = {
    container: {
      backgroundColor: "#495E57",
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      color: "#F4CE14",
    },
    logo: {
      height: "260px",
      width: "220px",
      borderRadius: "16px",
    },
    description: {
      display: "flex",
      flexDirection: "column",
    },
    resImage: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "10px",
    }
  };
  return (
    <div className="hero" style={styles.container}>
      <div className="description" style={styles.description}>
        <h2 style={styles.header}>Little Lemon</h2>
        <p style={{ color: "white" }}>Chicago</p>
        <p style={{color: "white"}}>{Description.TitleDescription}</p>
        <Button text="Reserve a Table" />
      </div>
      <div className="resImage" style={styles.resImage}>
        <img style= {styles.logo}src={RestaurantFood} alt="Restaurant food" />
      </div>
    </div>
  );
};
export default Hero;
