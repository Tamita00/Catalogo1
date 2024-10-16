import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  // Aquí puedes obtener el producto por ID

  return (
    <div>
      <h1>Detalle del Producto {id}</h1>
      {/* Mostrar más información e imágenes aquí */}
    </div>
  );
};

export default ProductDetail;
