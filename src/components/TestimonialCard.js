const TestimonialCard = ({ name, review, rating, imageSrc }) => {
  return (
    <div className="testimonials-individual-card-container">
      <div>
        <h3> Rating </h3>
        <p>{rating}</p>
      </div>
      <div className="testimonials-individual-card-name">
        <img src={imageSrc} alt="Person"></img>
        <p>{name}</p>
      </div>
      <div className="testimonials-individual-card-review">
        <h3>Review</h3>
        <p>{review}</p>
      </div>
    </div>
  );
};
export default TestimonialCard;
