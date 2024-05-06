const Card = ({ title, description, price, imageSrc }) => {
  return (
    <div className="specials-card-container">
      <img src={imageSrc} alt={title} />
      <div className="specials-card-container-content">
        <div>
          <h3>{title}</h3>
          <span>{price}</span>
        </div>
        <p>{description}</p>
        <button>Order a delivery</button>
      </div>
    </div>
  );
};

export default Card;
