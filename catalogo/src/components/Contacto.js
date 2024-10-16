import React from 'react';

const Contacto = () => {
  const styles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9f9f9',
    },
    header: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
      color: '#555',
    },
    input: {
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
      minHeight: '100px',
    },
    button: {
      padding: '10px 15px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Contacto</h1>
      <form>
        <div style={styles.formGroup}>
          <label style={styles.label}>Nombre:</label>
          <input type="text" required style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input type="email" required style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Mensaje:</label>
          <textarea required style={styles.textarea}></textarea>
        </div>
        <button type="submit" style={styles.button}>Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
