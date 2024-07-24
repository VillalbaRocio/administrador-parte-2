import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormularioProducto = () => {
    const [titulo, setTitulo] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const enviarFormularioProducto = async (e) => {
        e.preventDefault();

        try {
            const nuevoProducto = { 
                titulo, 
                precio, 
                descripcion 
            };

            const URL = "http://localhost:8080/api/productos/nuevo";
            const respuesta = await axios.post(URL, nuevoProducto);
            console.log(respuesta.data); 

            setTitulo('');
            setPrecio('');
            setDescripcion('');
            setError(null);

            navigate("/productos");
        } catch (error) {
            console.log("Algo falló", error);
            setError(error.response ? error.response.statusText : "Error de red");
        }
    };

    return (
      <div className ="contenedor">
        <form className="formulario" onSubmit={enviarFormularioProducto}>
            <h1>Gestión de Productos</h1>
            <div>
                <label>Título:</label>
                <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Precio:</label>
                <input
                    type="number"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Descripción:</label>
                <textarea
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />
            </div>
            <button type="submit">Crear</button>
            <div>{error}</div>
        </form>
      </div>
    );
};

export default FormularioProducto;