const Card = ({ title, description, price, imageSrc }) => {
  const styles = {
    card: {
      maxWidth: "300px",
      height: "500px",
      margin: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "#EDEFEE",
      borderTopLeftRadius: "16px",
      borderTopRightRadius: "16px",
      alignItems: "center",
      overflow: "hidden",
    },
    image: {
      objectFit: "cover",
      width: "100%",
      height: "200px",
    },
    content: {
      flex: 1,
      padding: "16px",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "16px",
    },
    title: {
      fontSize: "18px",
      fontWeight: "bold",
    },
    price: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#EE9972",
    },
    description: {
      fontSize: "16px",
      marginBottom: "16px",
    },
    button: {
      backgroundColor: "#F4CE14",
      color: "black",
      border: "none",
      borderRadius: "16px",
      padding: "8px 16px",
      fontSize: "14px",
      fontWeight: "bold",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.card}>
      <img src={imageSrc} alt={title} style={styles.image} />
      <div style={styles.content}>
        <div style={styles.header}>
          <h3 style={styles.title}>{title}</h3>
          <span style={styles.price}>{price}</span>
        </div>
        <p style={styles.description}>{description}</p>
        <button style={styles.button}>Order a delivery</button>
      </div>
    </div>
  );
};

export default Card;
