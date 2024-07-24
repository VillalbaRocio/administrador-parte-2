import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const ObtenerProducto = async () => {
      try {
        const URL = `http://localhost:8080/api/productos/${id}`;
        const respuesta = await axios.get(URL);
        setProducto(respuesta.data);
      } catch (error) {
        console.log("Error al obtener producto", error);
      }
    };

    ObtenerProducto();
  }, [id]);

  if (!producto) return <div>Cargando...</div>;

  return (
    <div>
      <h1>Detalles del Producto</h1>
      <h2>{producto.titulo}</h2>
      <p><strong>Precio:</strong> {producto.precio}</p>
      <p><strong>Descripción:</strong> {producto.descripcion}</p>
    </div>
  );
};

export default DetalleProducto;