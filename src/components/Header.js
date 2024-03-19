import Logo from "../assets/Logo.svg";
import Nav from "./Nav";
import "./Header.css";
const Header = () => {
  return (
    <header class="container">
      <img class="logo" src={Logo} alt="Logo" />
      <Nav class="nav" />
    </header>
  );
};
export default Header;
