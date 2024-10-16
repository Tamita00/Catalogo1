import React, { useState } from 'react';

const productos = [
  { id: 1, nombre: 'Producto 1', categoria: 'Electrónica', imagen: 'img1.jpg' },
  { id: 2, nombre: 'Producto 2', categoria: 'Ropa', imagen: 'img2.jpg' },
  { id: 3, nombre: 'Producto 3', categoria: 'Hogar', imagen: 'img3.jpg' },
  { id: 4, nombre: 'Producto 4', categoria: 'Electrónica', imagen: 'img4.jpg' },
  { id: 5, nombre: 'Producto 5', categoria: 'Ropa', imagen: 'img5.jpg' },
];

const Productos = () => {
  const [categoria, setCategoria] = useState('');
  const [busqueda, setBusqueda] = useState('');

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
    (categoria === '' || producto.categoria === categoria)
  );

  return (
    <div>
      <h1>Catálogo de Productos</h1>

      {/* Búsqueda */}
      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {/* Filtro por categoría */}
      <select onChange={(e) => setCategoria(e.target.value)} value={categoria}>
        <option value="">Todas las categorías</option>
        <option value="Electrónica">Electrónica</option>
        <option value="Ropa">Ropa</option>
        <option value="Hogar">Hogar</option>
      </select>

      {/* Mostrar productos */}
      <ul>
        {productosFiltrados.map((producto) => (
          <li key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} />
            <p>{producto.nombre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;









/////////////






import React, { useState } from 'react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const products = [/* Lista de productos aquí */];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Productos</h1>
      <input 
        type="text" 
        placeholder="Buscar productos..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.id}>
            <a href={`/product/${product.id}`}>{product.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
