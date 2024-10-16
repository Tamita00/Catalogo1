import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#333',
      color: '#fff',
      textAlign: 'center',
      padding: '15px 0',
      position: 'relative',
      bottom: '0',
      width: '100%',
      boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
    },
    text: {
      margin: '0',
      fontSize: '14px',
    },
  };

  return (
    <footer style={styles.footer}>
      <p style={styles.text}>&copy; Realizado por Tamara Dratler y Olivia Di Carlo</p>
    </footer>
  );
};

export default Footer;
