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

  return (
    <header
      style={{ transform: isVisible ? "translateY(0)" : "translateY(-100%)" }}
    >
      <div className="header-desktop-container">
        <img src={Logo} alt="Little Lemon Logo" />
        <nav
          className="header-nav"
          style={{ display: isMobile ? "none" : "flex" }}
        >
          <ul className="header-menu">
            {menuItems.map((item, index) => (
              <li key={index} className="header-menu-item">
                <a href={item.link} className="header-menu-link">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className={
            isMobile ? "header-menu-icon-block" : "header-menu-icon-none"
          }
          onClick={toggleMenu}
        >
          &#9776;
        </div>
      </div>
      {isMobile && (
        <div
          className="header-mobile-menu"
          style={{ display: isMenuOpen ? "block" : "none" }}
        >
          {menuItems.map((item, index) => (
            <div key={index} className="header-mobile-menu-item">
              <a href={item.link}>{item.text}</a>
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
