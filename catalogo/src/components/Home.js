import React from 'react';

// Simular datos de productos
const productos = [
  { id: 1, nombre: 'Producto 1', imagen: 'img1.jpg' },
  { id: 2, nombre: 'Producto 2', imagen: 'img2.jpg' },
  { id: 3, nombre: 'Producto 3', imagen: 'img3.jpg' },
  { id: 4, nombre: 'Producto 4', imagen: 'img4.jpg' },
  { id: 5, nombre: 'Producto 5', imagen: 'img5.jpg' },
  { id: 6, nombre: 'Producto 6', imagen: 'img6.jpg' },
  { id: 7, nombre: 'Producto 7', imagen: 'img7.jpg' },
];

// Función para obtener productos aleatorios
const obtenerProductosAleatorios = () => {
  return productos.sort(() => 0.5 - Math.random()).slice(0, 6);
};

// Componente Home
const Home = () => {
  const productosAleatorios = obtenerProductosAleatorios();

  return (
    <div>
      <h1>Bienvenido a nuestra tienda</h1>

      {/* Carousel de imágenes */}
      <div className="carousel">
        <img src="img1.jpg" alt="Carrusel 1" />
        <img src="img2.jpg" alt="Carrusel 2" />
        <img src="img3.jpg" alt="Carrusel 3" />
      </div>

      {/* Mostrar productos aleatorios */}
      <div className="productos-destacados">
        <h2>Productos destacados</h2>
        <ul>
          {productosAleatorios.map((producto) => (
            <li key={producto.id}>
              <img src={producto.imagen} alt={producto.nombre} />
              <p>{producto.nombre}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};



export default Home;











/////////


import React from 'react';

const Home = () => {
  // Simulando productos aleatorios
  const randomProducts = [...Array(6)].map((_, index) => ({ id: index, name: `Producto ${index + 1}` }));

  return (
    <div>
      <h1>Home</h1>
      <div className="carousel">
        {/* Implementa tu carousel aquí */}
      </div>
      <div className="products">
        {randomProducts.map(product => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Home;
