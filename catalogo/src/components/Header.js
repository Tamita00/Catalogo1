import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const styles = {
    header: {
      backgroundColor: '#4CAF50',
      color: '#fff',
      padding: '15px 20px',
      textAlign: 'center',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    title: {
      margin: '0',
      fontSize: '24px',
    },
    nav: {
      marginTop: '10px',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      margin: '0 15px',
      fontSize: '18px',
      transition: 'color 0.3s',
    },
    linkHover: {
      color: '#ddd',
    },
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Catálogo de Productos</h1>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/productos" style={styles.link}>Productos</Link>
        <Link to="/contacto" style={styles.link}>Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;
