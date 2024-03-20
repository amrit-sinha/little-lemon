const Button = (props) => {
  const styles = {
    backgroundColor: "#F4CE14",
    color: "black",
    height: "50px",
    width: "200px",
    padding: "5px 15px",
    borderRadius: "16px",
    outline: 0,
    border: 0,
    textTransform: "uppercase",
    margin: "10px 10px",
    cursor: "pointer",
    boxShadow: "0px 2px 2px lightgray",
  };
  return (
    <button onClick={null} style={styles}>
        {props.text}
      </button>
  );
};
export default Button;
