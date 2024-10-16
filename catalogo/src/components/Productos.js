import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import img3 from '../assets/imagenes/p3.jpg';
import img4 from '../assets/imagenes/p4.jpg';
import img1 from '../assets/imagenes/p1.jpg';
import img2 from '../assets/imagenes/p2.jpg';
import img5 from '../assets/imagenes/p5.jpg';
import img6 from '../assets/imagenes/p6.jpg';

// Define el array de productos fuera del componente
export const productos = [
  { id: 1, nombre: 'Marrón Bueno', categoria: 'BuenaCalidad', imagen: img1, precio: 10.000 },
{ id: 2, nombre: 'Negro Bueno', categoria: 'BuenaCalidad', imagen: img2, precio: 10.000 },
{ id: 3, nombre: 'Negro Malo', categoria: 'MalaCalidad', imagen: img3, precio: 5.000 },
{ id: 4, nombre: 'Marrón Bueno', categoria: 'MalaCalidad', imagen: img4, precio: 5.000 },
{ id: 2, nombre: 'Negro Deforme', categoria: 'MalaCalidad', imagen: img5, precio: 5.000 },
{ id: 3, nombre: 'Lit Salchicha', categoria: 'BuenaCalidad', imagen: img6, precio: 10.000 }
];

const Products = () => {
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');
  const [busqueda, setBusqueda] = useState('');

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
    (categoria === '' || producto.categoria === categoria) && (precio === '' || producto.precio === precio)
  );

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      textAlign: 'center',
    },
    title: {
      marginBottom: '20px',
    },
    searchInput: {
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      marginBottom: '20px',
      width: 'calc(100% - 22px)',
      fontSize: '16px',
    },
    categorySelect: {
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      marginBottom: '20px',
      fontSize: '16px',
    },
    productList: {
      listStyleType: 'none',
      padding: '0',
      margin: '0',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    productItem: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '10px',
      margin: '10px',
      width: '200px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9f9f9',
      textAlign: 'center',
    },
    productImage: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '5px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Catálogo de Productos</h1>

      {/* Búsqueda */}
      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={styles.searchInput}
      />

      {/* Filtro por categoría */}
      <select onChange={(e) => setCategoria(e.target.value)} value={categoria} style={styles.categorySelect}>
        <option value="">Todas las categorías</option>
        <option value="BuenaCalidad">BuenaCalidad</option>
        <option value="MalaCalidad">MalaCalidad</option>
      </select>

      {/* Mostrar productos */}
      <ul style={styles.productList}>
        {productosFiltrados.map((producto) => (
          <li key={producto.id} style={styles.productItem}>
            <Link to={`/detalleProducto/${producto.id}`}><img src={producto.imagen} alt="Carrusel 1" style={styles.carouselImage} /></Link>
            <p>{producto.nombre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
