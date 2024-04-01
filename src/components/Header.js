import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.svg";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Check initial screen width
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about" },
    { text: "Menu", link: "/menu" },
    { text: "Reservations", link: "/booking" },
    { text: "Order Online", link: "/order-online" },
    { text: "Log In", link: "/login" },
  ];

  const styles = {
    header: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      backgroundColor: "white",
      transition: "transform 0.3s ease-in-out",
      zIndex: 100,
      transform: isVisible ? "translateY(0)" : "translateY(-100%)",
      padding: "10px 0",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "80%",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    logo: {
      height: "40px",
    },
    nav: {
      display: isMobile ? "none" : "flex",
    },
    menu: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
    },
    menuItem: {
      marginLeft: "20px",
    },
    menuLink: {
      textDecoration: "none",
      color: "black",
      fontSize: "16px",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    menuIcon: {
      display: isMobile ? "block" : "none",
      cursor: "pointer",
    },
    mobileMenu: {
      display: isMenuOpen ? "block" : "none",
      position: "absolute",
      top: "100%",
      left: 0,
      width: "100%",
      backgroundColor: "white",
      padding: "10px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    },
    mobileMenuItem: {
      marginBottom: "10px",
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <img src={Logo} alt="Little Lemon Logo" style={styles.logo} />
        <nav style={styles.nav}>
          <ul style={styles.menu}>
            {menuItems.map((item, index) => (
              <li key={index} style={styles.menuItem}>
                <a href={item.link} style={styles.menuLink}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div style={styles.menuIcon} onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
      {isMobile && (
        <div style={styles.mobileMenu}>
          {menuItems.map((item, index) => (
            <div key={index} style={styles.mobileMenuItem}>
              <a href={item.link} style={styles.menuLink}>
                {item.text}
              </a>
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
