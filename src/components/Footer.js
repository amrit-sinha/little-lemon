import Nav from "./Nav";
import RestaurantImage from "../assets/restaurant.jpg";
const Footer = () => {
  const styles = {
    container: {
      backgroundColor: "#EDEFEE",
      display: "flex",
    },
    image: {
      height: "350px",
      width: "350px",
    },
  };
  return (
    <div className="footer" style={styles.container}>
      <div>
        <img
          src={RestaurantImage}
          alt="restautant interior"
          style={styles.image}
        />
      </div>
      {/* <div>
        <Nav />
      </div> */}
    </div>
  );
};
export default Footer;
