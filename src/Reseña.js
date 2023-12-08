import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import "./App.css";
import Axios from "axios";
import Swal from "sweetalert2";
import reseñas from './img/resenas.png';

const Reseña = () => {
    const [nombre, setNombre] = useState("");
    const [contenido, setContenido] = useState("");
    const [lista, setLista] = useState([]);
    const [editar, setEditar] = useState(false);
    const [id, setId] = useState(0);

    useEffect(() => {
        listar();
    }, []);

    const listar = () => {
        Axios.get("https://lacabana-server.onrender.com/api/")
            .then((result) => {
                setLista(result.data);
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Tuvimos un problema",
                    text: "Por el momento no podemos listar las reseñas",
                    footer: err.message,
                });
            });
    };

    const handleCrear = () => {
        Axios.post("https://lacabana-server.onrender.com/api/", {
            nombre: nombre,
            contenido: contenido,
            fecha: new Date(),
        })
            .then(() => {
                listar();
                limpiarCampos();
                Swal.fire({
                    title: "Reseña guardada con éxito",
                    icon: "success",
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Tuvimos un problema",
                    text: "Por el momento no podemos guardar la reseña",
                    footer: error.message,
                });
            });
    };

    const handleEditar = () => {
        Axios.put("https://lacabana-server.onrender.com/api/", {
            nombre: nombre,
            contenido: contenido,
            fecha: new Date(),
            id: id,
        })
            .then(() => {
                listar();
                limpiarCampos();
                Swal.fire({
                    title: "Reseña actualizada con éxito",
                    icon: "success",
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Tuvimos un problema",
                    text: "Por el momento no podemos actualizar la reseña",
                    footer: error.message,
                });
            });
    };

    const handleEliminar = (dto) => {
        Swal.fire({
            icon: "warning",
            title: "Desea eliminar este registro?",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si",
            cancelButtonText: "No",
        })
            .then((result) => {
                if (result.isConfirmed) {
                    Axios.delete(`https://lacabana-server.onrender.com/api/${dto.id}`)
                        .then(() => {
                            listar();
                            limpiarCampos();
                            Swal.fire({
                                title: "Reseña eliminada con éxito",
                                text: "Reseña eliminada con éxito",
                                icon: "success",
                            });
                        })
                        .catch((error) => {
                            Swal.fire({
                                icon: "error",
                                title: "Tuvimos un problema",
                                text: "Por el momento no podemos eliminar la reseña",
                                footer: error.message,
                            });
                        });
                }
            });
    };

    const limpiarCampos = () => {
        setNombre("");
        setContenido("");
        setEditar(false);
    };

    const editarForm = (dto) => {
        setNombre(dto.nombre);
        setContenido(dto.contenido);
        setId(dto.id);
        setEditar(true);
    };

    return (
        <div className="componentes">
            <img className="imgPipas" src={reseñas} alt="" />
            <div class="nsotros2">
                <div class="card">
                    <div class="card-body">
                        <div className='form-group'>
                            <label>Escribe aquí tu reseña</label>
                            <textarea
                                name="contenido"
                                className='form-control'
                                onChange={(e) => setContenido(e.target.value)}
                                value={contenido}
                            ></textarea>
                        </div>
                        <div className='form-group'>
                            <label>Proporciónanos tu nombre</label>
                            <input
                                type='text'
                                name="nombre"
                                className='form-control'
                                onChange={(e) => setNombre(e.target.value)}
                                value={nombre}
                            ></input>
                        </div>
                        <br></br>
                        <div className="button-container">
                            {editar ? (
                                <div>
                                    <button
                                        onClick={handleEditar}
                                        className="button"
                                    >
                                        Actualizar
                                    </button>
                                </div>
                            ) : (
                                <div className="button-container">
                                    {editar ? (
                                        <div>
                                            <button
                                                onClick={handleEditar}
                                                className="button"
                                                
                                            >
                                                Actualizar
                                            </button>
                                        </div>
                                    ) : (
                                        <div>
                                            <button
                                                onClick={handleCrear}
                                                className="button"
                                            >
                                                Guardar
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {lista.map((dto, index) => (
                    <div className="card" key={index}>
                        <div className="card-body">
                            <h5 className="nosotros-title">{dto.contenido}</h5>
                            <p className="nosotros-text">Publicado por {dto.nombre}</p>
                            <div className="button-container">
                                <button
                                    className="button"
                                    style={{ marginRight: '5px' }}
                                    onClick={() => {
                                        editarForm(dto);
                                    }}
                                >
                                    {" "}
                                    Editar{" "}
                                </button>
                                <button
                                    className="button"
                                    onClick={() => handleEliminar(dto)}
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}


                <div class="row "><p></p></div>
                <div class="row "><p></p></div>
                <div class="footer">
                    <div className="footer-container">
                        <div className="footer-item">
                            <b>Salida a Dolores Hidalgo Km 1, San Miguel de Allende, Gto.</b>
                        </div>
                        <div className="footer-item">
                            <b>Tel. 415 196 8913  Email: lacabanasma@gmail.com</b>
                        </div>
                        <div className="footer-item">
                            <p>.</p>
                        </div>
                        <div className="footer-item">
                            <p>.</p>
                        </div>
                        <div className="footer-item">
                            <p>.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reseña;
