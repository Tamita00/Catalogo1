import React from 'react';
import { productos } from './Productos';

const DetalleProducto = ({ id }) => {
  const product = productos.find(p => p.id === id);

  if (!product) return <div style={styles.error}>Producto no encontrado.</div>;

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9f9f9',
      textAlign: 'center',
    },
    header: {
      marginBottom: '20px',
      color: '#333',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
      marginBottom: '15px',
    },
    price: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#4CAF50',
    },
    category: {
      fontSize: '16px',
      color: '#555',
    },
    error: {
      textAlign: 'center',
      color: 'red',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>{product.nombre}</h1>
      <img src={product.imagen} alt={product.nombre} style={styles.image} />
      <p style={styles.price}>Precio: ${product.precio}</p>
      <p style={styles.category}>Categoría: {product.categoria}</p>
    </div>
  );
};

export default DetalleProducto;
