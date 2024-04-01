import React, { useState } from "react";

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
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push(newBooking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    console.log('Form submitted:', newBooking);
    alert("Your reservation has been made!");
    dispatch({ type: "UPDATE_TIMES", payload: date });
    setTime(availableTimes[0]);
  };


  return (
    <form
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">Enter your name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
      id="res-time"
      value={time}
      onChange={(e) => setTime(e.target.value)}
    >
      {availableTimes.map((time) => (
        <option key={time}>{time}</option>
      ))}
    </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(parseInt(e.target.value))}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
