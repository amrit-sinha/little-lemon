const Button = (props) => {
  const handleClick = () => {
    if (props.redirect) window.location.href = `${props.redirect}`;
  };
  return <button onClick={handleClick}>{props.text}</button>;
};
export default Button;
