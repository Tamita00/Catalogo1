import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './components/Home';

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

const productosAleatorios = obtenerProductosAleatorios();


function App() {
  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;


















//////////////


import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
