import Logo from "../assets/Logo.svg";
import Nav from "./Nav";
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5rem',
  },
  logo: {
    marginRight: '5rem'
  }

}
const Header = () => {
  return (
    <header style = {styles.container}>
      <img style={styles.logo} src={Logo} alt="Logo" />
      <Nav class="nav" />
    </header>
  );
};
export default Header;
