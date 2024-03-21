const Nav = () => {
  const styles = {
    ul: {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
    },
    li: {
      marginRight: '2rem',
    },
    a: {
      textDecoration: 'none',
      color: '#333',
      fontWeight: 'bold',
    },
    activeLink: {
      color: '#ff9900',
    },
  };

  return (
    <ul style={styles.ul}>
      <li style={styles.li}>
        <a href="/" style={styles.a}>Home</a>
      </li>
      <li style={styles.li}>
        <a href="/about" style={styles.a}>About</a>
      </li>
      <li style={styles.li}>
        <a href="/menu" style={styles.a}>Menu</a>
      </li>
      <li style={styles.li}>
        <a href="/reservations" style={styles.a}>Reservations</a>
      </li>
      <li style={styles.li}>
        <a href="/order" style={styles.a}>Order Online</a>
      </li>
      <li style={styles.li}>
        <a href="/login" style={styles.a}>Login</a>
      </li>
    </ul>
  );
};

export default Nav;
