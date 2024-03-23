import Person1Img from "../assets/Person1.jpg";
import Person2Img from "../assets/Person2.jpg";
import Person3Img from "../assets/Person3.jpg";
import Person4Img from "../assets/Person4.jpg";
import TestimonialCard from "./TestimonialCard";
const Testimonials = () => {
  const cardData = [
    {
      Name: "Andrea",
      Rating: "⭐⭐⭐⭐⭐",
      Review: "The best place in town",
      img: Person1Img,
    },
    {
      Name: "Daniel",
      Rating: "⭐⭐⭐⭐",
      Review: "Good ambience",
      img: Person2Img,
    },
    {
      Name: "Nathan",
      Rating: "⭐⭐⭐⭐",
      Review: "Must Visit",
      img: Person3Img,
    },
    {
      Name: "Sara",
      Rating: "⭐⭐⭐⭐⭐",
      Review: "hello",
      img: Person4Img,
    },
  ];
  const styles = {
    container: {
      backgroundColor: "#EE9972",
      width: "100%",
      textAlign: "center",
    },
    heading: {
      fontFamily: "Markazi Text, serif",
      fontWeight: "bold",
      justifyContent: "center",
    },
    card: {
      display: "flex",
      justifyItems: "center",
      gap: "1rem",
      height: "auto",
      width: "auto"
    },
  };

  return (
    <div className="testimonials" style={styles.container}>
      <div className="testimonials-header" style={styles.heading}>
        <h2> Testimonials </h2>
      </div>
      <div className="testimonials-card" style={styles.card}>
        {cardData.map((data) => {
          return (
            <TestimonialCard
              name={data.Name}
              review={data.Review}
              rating={data.Rating}
              imageSrc={data.img}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Testimonials;
