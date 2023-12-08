import React, { useEffect, useState } from 'react'
import reseñas from './img/resenas.png';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Modal, Button } from 'react-bootstrap';

const idb = window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB ||
    window.shimIndexedDB;

const createCollectionsInIndexedDB = () => {
    if (!idb) {
        console.log('Este navegador no soporta IndexedDB')
        return;
    }
    console.log(idb);

    const request = idb.open('la-cabana', 2);

    request.onerror = (event) => {
        console.log("Error", event);
        console.log("Ha ocurrido un error con IndexedDB");
    };

    request.onupgradeneeded = (event) => {
        const db = request.result;


        db.createObjectStore('resenasData', {
            keyPath: "id",
            autoIncrement: true
        })
    }

    request.onsuccess = () => {
        console.log('Base de datos abierta exitosamente')

    }
};
const Reseñas = () => {

    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);
    const [contenido, setContenido] = useState('');
    const [nombre, setNombre] = useState('');
    const [allResenasData, setAllResenasData] = useState([]);
    const [editResena, setEditResena] = useState(false);
    const [addResena, setAddResena] = useState(false);
    const [selectedResena, setSelectedResena] = useState({});


    useEffect(() => {
        createCollectionsInIndexedDB();
        getAll();
    }, []);

    const getAll = () => {
        const dbPromise = idb.open('la-cabana', 2);
        dbPromise.onsuccess = () => {
            const db = dbPromise.result;

            const tx = db.transaction('resenasData', 'readonly');

            const resenasData = tx.objectStore('resenasData');

            const resenas = resenasData.getAll();
            resenas.onsuccess = (query) => {
                setAllResenasData(query.srcElement.result);
            };

            resenas.onerror = (query) => {
                alert('Ocurrió un error al consultar');
            }

            Text.oncomplete = () => {
                db.close();
            }
        };
    };

    const handleSubmit = (event) => {
        const dbPromise = idb.open('la-cabana', 2);

        if (contenido && nombre) {
            dbPromise.onsuccess = () => {
                const db = dbPromise.result;

                const tx = db.transaction('resenasData', 'readwrite');

                const resenasData = tx.objectStore('resenasData');

                const resenas = resenasData.put({
                    id: allResenasData?.length + 1,
                    contenido,
                    nombre
                })

                resenas.onsuccess = () => {
                    tx.oncomplete = () => {
                        db.close();
                    }
                    getAll();
                    handleShowModal();
                    setContenido('');
                    setNombre('');
                }

                resenas.onerror = (event) => {
                    console.log(event);

                    alert("Error al guardar la reseña");
                }
            }
        }
    };

    const deleteResena = (resena) => {
        const dbPromise = idb.open('la-cabana', 2);
        dbPromise.onsuccess = () => {
            const db = dbPromise.result;

            const tx = db.transaction('resenasData', 'readwrite');

            const resenasData = tx.objectStore('resenasData');

            const deletedResena = resenasData.delete(resena?.id);
            deletedResena.onsuccess = (query) => {
                handleShowModal();
                getAll();

            };

            deletedResena.onerror = (query) => {
                alert('Ocurrió un error al eliminar');
            }

            Text.oncomplete = () => {
                db.close();
            }
        };
    };

    return (
        <div class="componentes">
            <img className="imgPipas" src={reseñas} alt="" />
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Acción realizada</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Reseña Guardada/Eliminada corectamente
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>

            <div class="nsotros2">
                <div class="card">
                    <div class="card-body">
                        <h2 className="resena-titulo">Crear reseña</h2>
                        <div className='form-group'>
                            <label>Escribe aquí tu reseña</label>
                            <textarea name="contenido" className='form-control' onChange={e => setContenido(e.target.value)} value={contenido}></textarea>
                        </div>
                        <div className='form-group'>
                            <label>Proporciónanos tu nombre</label>
                            <input type='text' name="nombre" className='form-control' onChange={e => setNombre(e.target.value)} value={nombre}></input>
                        </div>
                        <br></br>
                        <div className="button-container">
                            <div className='form-group'>
                                <button className="button" onClick={handleSubmit}>Enviar</button>

                            </div>
                        </div>

                    </div>
                </div>
                {allResenasData.map((row) => (
                    <div className="card" key={row.id}>
                        <div className="card-body">
                            <h5 className="nosotros-title">{row.contenido}</h5>
                            <p className="nosotros-text">Publicado por {row.nombre}</p>
                            <div className="button-container">
                                <button className="button" onClick={() => deleteResena(row)}>Eliminar</button>
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
    )
};

export default Reseñas;
