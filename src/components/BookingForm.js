import React, { useState } from "react";
import restaurant from "../assets/restaurant.jpg";

const BookingForm = ({ availableTimes, dispatch }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
    setTime(availableTimes[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = { name, date, time, guests, occasion };
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    console.log("Form submitted:", newBooking);
    alert("Your reservation has been made!");
    dispatch({ type: "UPDATE_TIMES", payload: date });
    setTime(availableTimes[0]);
  };

  const today = new Date().toISOString().split("T")[0];

  const isFormValid = name.trim() !== "" && date !== "";

  return (
    <div className="booking-page-container">
      <img
        className="booking-page-bg"
        src={restaurant}
        alt="restaurant background"
      />
      <div className="booking-page">
        <h1>Book Table</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-element">
            <label htmlFor="name" className="name-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-element">
            <label htmlFor="res-date" className="res-date-label">
              Date
            </label>
            <input
              type="date"
              id="res-date"
              value={date}
              onChange={handleDateChange}
              min={today}
            />
          </div>
          <div className="form-element">
            <label htmlFor="res-time" className="res-time-label">
              Time
            </label>
            <select
              id="res-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              {availableTimes.map((time) => (
                <option key={time}>{time}</option>
              ))}
            </select>
          </div>
          <div className="form-element">
            <label htmlFor="guests" className="guests-label">
              Guests
            </label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
            />
          </div>
          <div className="form-element">
            <label htmlFor="occasion" className="occasion-label">
              Occasion
            </label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>

          <input
            type="submit"
            value="Reserve"
            className="submit-button"
            disabled={!isFormValid}
            style={isFormValid ? { cursor: "pointer" } : {}}
          />
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
