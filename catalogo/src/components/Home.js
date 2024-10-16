import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetalleProducto from './DetalleProducto';
import { Link } from 'react-router-dom';
import img3 from '../assets/imagenes/p3.jpg';
import img4 from '../assets/imagenes/p4.jpg';
import img1 from '../assets/imagenes/p1.jpg';
import img2 from '../assets/imagenes/p2.jpg';
import img5 from '../assets/imagenes/p5.jpg';
import img6 from '../assets/imagenes/p6.jpg';

const Home = () => {
  // Simulando productos aleatorios
  const productos = [
    { id: 1, nombre: 'Marrón Bueno', categoria: 'BuenaCalidad', imagen: '../assets/imagenes/p1.jfif', precio: 10.000 },
    { id: 2, nombre: 'Negro Bueno', categoria: 'BuenaCalidad', imagen: '../assets/imagenes/p2.jfif', precio: 10.000 },
    { id: 3, nombre: 'Negro Malo', categoria: 'MalaCalidad', imagen: '../assets/imagenes/p3.jpg', precio: 5.000 },
    { id: 4, nombre: 'Marrón Bueno', categoria: 'MalaCalidad', imagen: '../assets/imagenes/p4.jpg', precio: 5.000 },
    { id: 5, nombre: 'Negro Deforme', categoria: 'MalaCalidad', imagen: '../assets/imagenes/p5.jfif', precio: 5.000 },
    { id: 6, nombre: 'Lit Salchicha', categoria: 'BuenaCalidad', imagen: '../assets/imagenes/6.jfif', precio: 10.000 }
  ];

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      textAlign: 'center',
    },
    carousel: {
      display: 'flex',
      overflowX: 'auto',
      padding: '10px 0',
      marginBottom: '20px',
    },
    carouselImage: {
      flex: '0 0 auto',
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
      margin: '0 10px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    products: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
    },
    productCard: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '10px',
      margin: '10px',
      width: 'calc(30% - 20px)',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      backgroundColor: '#f9f9f9',
    },
    title: {
      marginBottom: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Home</h1>

      <div style={styles.carousel}>
        <img src={img1} alt="Carrusel 1" style={styles.carouselImage} />
        <img src={img2} alt="Carrusel 2" style={styles.carouselImage} />
        <img src={img3} alt="Carrusel 3" style={styles.carouselImage} />
        <img src={img4} alt="Carrusel 4" style={styles.carouselImage} />
        <img src={img5} alt="Carrusel 5" style={styles.carouselImage} />
        <img src={img6} alt="Carrusel 6" style={styles.carouselImage} />
      </div>

      <div style={styles.products}>
        {productos.map(producto => (
          <div key={producto.id} style={styles.productCard}>
            <Link to={`/detalleProducto/${producto.id}`}>{producto.nombre}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
