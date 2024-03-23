const TestimonialCard = ({ name, review, rating, imageSrc }) => {
  const styles = {
    card: {
      minWidth: "300px",
      height: "400px",
      margin: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "white",
      alignItems: "center",
      overflow: "hidden",
      borderRadius: "16px",
      marginBottom: "2rem",
    },
    name: {
      display: "flex",
      alignItems: "center"
    },
    image: {
      borderRadius: "30px",
      width: "150px",
      height: "150px",
      margin: "20px",
    },
  };
  return (
    <div style={styles.card}>
      <div>
        <h3> Rating </h3>
        <p>{rating}</p>
      </div>
      <div style={styles.name}>
        <img src={imageSrc} alt="Person" style={styles.image}></img>
        <p style={{ fontWeight: "bold" }}>{name}</p>
      </div>
      <div>
        <h3>Review</h3>
        <p>{review}</p>
      </div>
    </div>
  );
};
export default TestimonialCard;
