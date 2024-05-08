import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import Menu from "./Menu";
import { Routes, Route } from "react-router-dom";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/booking" element={<BookingPage />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
    </Routes>
  );
};
export default Routing;
