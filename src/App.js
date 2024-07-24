import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import FormularioProducto from './componentes/FormularioProducto';
import ListaProductos from './componentes/ListaProductos';
import DetalleProducto from './componentes/DetalleProducto';

const App = () => {
  return (
    <div className="App">
      <h1>Aplicación de Productos</h1>
        <Link to="/">Lista de productos</Link> -
        <Link to="/productos/nuevo">Agregar producto</Link>

        <Routes>
          <Route path="/" element={<ListaProductos />} />
          <Route path="/productos/nuevo" element={<FormularioProducto />} />
          <Route path="/productos/:id" element={<DetalleProducto />} />
        </Routes>
    </div>
  );
}

export default App;