import React from "react";
import RestaurantImage from "../assets/restaurant.jpg";

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: "#f4f4f4",
      padding: "1em 0",
    },
    footerContent: {
      display: "flex",
      justifyContent: "space-between",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    footerImage: {
      width: "40%",
    },
    footerLinks: {
      display: "flex",
      justifyContent: "space-between",
      width: "50%",
    },
    footerColumn: {
      listStyleType: "none",
      padding: 0,
    },
    footerLink: {
      color: "#333",
      textDecoration: "none",
      marginBottom: "10px",
      display: "block",
    },
    footerBottom: {
      backgroundColor: "#ddd",
      padding: "10px 0",
      textAlign: "center",
      marginTop: "20px",
    },
  };

  const footerLinks = [
    {
      title: "",
      links: [
        { text: "Home", url: "/" },
        { text: "About", url: "/" },
        { text: "Menu", url: "/" },
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
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.footerImage}>
          <img
            src={RestaurantImage}
            alt="Restaurant"
            style={{ width: "100%" }}
          />
        </div>
        <div style={styles.footerLinks}>
          {footerLinks.map((column, index) => (
            <div key={index} style={styles.footerColumn}>
              <ul style={styles.footerColumn}>
                {column.title && <li><h3>{column.title}</h3></li>}
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.url} style={styles.footerLink}>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div style={styles.footerBottom}>
        <p>&copy; 2024 Little Lemon</p>
      </div>
    </footer>
  );
};

export default Footer;
