import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListaProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const URL = "http://localhost:8080/api/productos";
        const respuesta = await axios.get(URL);
        setProductos(respuesta.data);
      } catch (error) {
        console.log("Error al obtener productos", error);
      }
    };

    obtenerProductos();
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto._id}>
            <Link to={`/productos/${producto._id}`}>{producto.titulo}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaProductos;