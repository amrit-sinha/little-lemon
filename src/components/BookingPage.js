import { useReducer } from "react";
import BookingForm from "./BookingForm";

const BookingPage = () => {
  const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  };

  const updateTimes = (state, action) => {
    const selectedDate = action.payload;
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const bookedTimes = bookings
      .filter((booking) => booking.date === selectedDate)
      .map((booking) => booking.time);
    return initializeTimes().filter((time) => !bookedTimes.includes(time));
  };

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return <BookingForm availableTimes={availableTimes} dispatch={dispatch} />;
};

export default BookingPage;
