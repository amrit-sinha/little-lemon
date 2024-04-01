import React from 'react';
import RestaurantImage from "../assets/restaurant.jpg";

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#f4f4f4',
      padding: '1em 0',
    },
    footerContent: {
      display: 'flex',
      justifyContent: 'space-between',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    footerImage: {
      width: '40%',
    },
    footerLinks: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '50%',
    },
    footerColumn: {
      listStyleType: 'none',
      padding: 0,
    },
    footerLink: {
      color: '#333',
      textDecoration: 'none',
      marginBottom: '10px',
      display: 'block',
    },
    footerBottom: {
      backgroundColor: '#ddd',
      padding: '10px 0',
      textAlign: 'center',
      marginTop: '20px',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.footerImage}>
          <img src={RestaurantImage} alt="Restaurant" style={{ width: '100%' }} />
        </div>
        <div style={styles.footerLinks}>
          <div style={styles.footerColumn}>
            <ul style={styles.footerColumn}>
              <li>
                <a href="/" style={styles.footerLink}>Home</a>
              </li>
              <li>
                <a href="/" style={styles.footerLink}>About</a>
              </li>
              <li>
                <a href="/" style={styles.footerLink}>Menu</a>
              </li>
              <li>
                <a href="/booking" style={styles.footerLink}>Reservations</a>
              </li>
              <li>
                <a href="/" style={styles.footerLink}>Order Online</a>
              </li>
              <li>
                <a href="/" style={styles.footerLink}>Log in</a>
              </li>
            </ul>
          </div>
          <div style={styles.footerColumn}>
            <ul style={styles.footerColumn}>
              <li>
                <h3>Contact</h3>
              </li>
              <li>
                <a href="/" style={styles.footerLink}>Address</a>
              </li>
              <li>
                <a href="/" style={styles.footerLink}>Phone number</a>
              </li>
              <li>
                <a href="/" style={styles.footerLink}>Email</a>
              </li>
            </ul>
          </div>
          <div style={styles.footerColumn}>
            <ul style={styles.footerColumn}>
              <li>
                <h3>Social Media</h3>
              </li>
              <li>
                <a href="https://www.instagram.com" style={styles.footerLink}>Instagram</a>
              </li>
              <li>
                <a href="https://www.facebook.com" style={styles.footerLink}>Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com" style={styles.footerLink}>Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div style={styles.footerBottom}>
        <p>&copy; 2024 Little Lemon</p>
      </div>
    </footer>
  );
}
export default Footer;