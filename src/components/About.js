import Chef1 from "../assets/restaurant chef B.jpg";
import Chef2 from "../assets/Mario and Adrian A.jpg";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2> Little Lemon</h2>
        <h3> Chicago</h3>
        <p>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. The
          restaurant features a locally-sourced menu with daily specials.
        </p>
      </div>
      <div className="about-chef-image">
        <img src={Chef1} alt="chef1" />
        <img src={Chef2} alt="chef2" />
      </div>
    </div>
  );
};
export default About;
