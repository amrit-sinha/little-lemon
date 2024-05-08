import React from "react";
import RestaurantImage from "../assets/restaurant.jpg";

const Footer = () => {
  const footerLinks = [
    {
      title: "",
      links: [
        { text: "Home", url: "/" },
        { text: "About", url: "/" },
        { text: "Menu", url: "/menu" },
        { text: "Reservations", url: "/booking" },
        { text: "Order Online", url: "/" },
        { text: "Log in", url: "/" },
      ],
    },
    {
      title: "Contact",
      links: [
        { text: "Address", url: "/" },
        { text: "Phone number", url: "/" },
        { text: "Email", url: "/" },
      ],
    },
    {
      title: "Social Media",
      links: [
        { text: "Instagram", url: "https://www.instagram.com" },
        { text: "Facebook", url: "https://www.facebook.com" },
        { text: "Twitter", url: "https://twitter.com" },
      ],
    },
  ];

  return (
    <footer>
      <div className="footer-container">
        <img src={RestaurantImage} alt="Restaurant" />
        <div className="footer-links-container">
          {footerLinks.map((column, index) => (
            <div key={index} className="footer-column">
              <ul className="footer-column">
                {column.title && (
                  <li>
                    <h3>{column.title}</h3>
                  </li>
                )}
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.url} className="footer-links">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="copyright">
        <p style={{ color: "black" }}>&copy; 2024 Little Lemon</p>
      </div>
    </footer>
  );
};

export default Footer;
