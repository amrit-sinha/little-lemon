import Chef1 from "../assets/restaurant chef B.jpg";
import Chef2 from "../assets/Mario and Adrian A.jpg";
const About = () => {
  const styles = {
    container: {
      backgroundColor: "#495E57",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    header: {
      color: "#F4CE14",
      display: "flex",
      flexDirection: "column",
      marginLeft: "10%",
      marginRight: "10%",
    },
    header2: {
      color: "white",
    },
    imageStack: {
      position: "relative",
      marginLeft: "10%",
      marginRight: "10%",
    },
    image: {
      height: "200px",
      width: "200px",
    },
  };
  return (
    <div className="about" style={styles.container}>
      <div className="about-header" style={styles.header}>
        <h2> Little Lemon</h2>
        <h3 style={{ color: "white" }}> Chicago</h3>
        <p style={{ color: "white" }}>
          Little Lemon is a family-owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist.
        </p>
      </div>
      <div className="image" style={styles.imageStack}>
        <img src={Chef1} alt="chef1" style={styles.image} />
        <img src={Chef2} alt="chef2" style={styles.image} />
      </div>
    </div>
  );
};
export default About;
