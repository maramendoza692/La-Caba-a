import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import Axios from "axios";

function Reseña() {
  //Creamos las variables y las inicializamos
  const [id, setId] = useState(0);
  const [nombreAdoptante, setNombreAdoptante] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

  // Para controlar los botones
  const [editar, setEditar] = useState("");
  //Para llenar la lista
  const [lista, setLista] = useState([]);
  // URL de nuestra api
  const url = "http://localhost:30005/api/";

  useEffect(() => {
    listar();
  }, []);

  //Metodo Listar
  const listar = () => {
    Axios.get(url)
      .then((result) => {
        setLista(result.data);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Tuvimos un problema",
          text: " Por el momento no podemos listar las reseñas",
          footer: err.message,
        });
      });
  };

  //Metodo para guardar
  const handleCrear = () => {
    Axios.post(url, {
      nombre: nombre,
      contenido: conetnido,
      fecha: new Date(),
    })
      .then(() => {
        listar();
        limpiarCampos();
        Swal.fire({
          title: "<b>Reseña guardado con éxito</b>",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Tuvimos un problema",
          text: " Por el momento no podemos listar las reseñas",
          footer: error.message,
        });
      });
  };

  //METODO DE EDITAR
  const handleEditar = () => {
    Axios.put(url, {
        nombre: nombre,
        contenido: conetnido,
        fecha: new Date(),
      Id: id,
    })
      .then(() => {
        listar();
        limpiarCampos();
        Swal.fire({
          title: "<b>Reseña actualizada con éxito</b>",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Tuvimos un problema",
          text: " Por el momento no podemos actualizar las reseñas",
          footer: error.message,
        });
      });
  };

  //METODO ELIMINAR
  const handleEliminar = (dto) => {
    Swal.fire({
      icon: "warning",
      title: "Desea eliminar este registro?",
      text: `Realmente desea eliminar el registro de ${dto.nombre_adoptante}`,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "No",
    })
      .then((result) => {
        if (result.isConfirmed) {
          Axios.delete(url + dto.Id).then(() => {
            listar();
            limpiarCampos();
            Swal.fire({
              title: "<b>Reseña eliminada con éxito</b>",
              text: "Rseña alimiinada con éxito",
              icon: "success",
            });
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Tuvimos un problema",
          text: " Por el momento no podemos actualizar las reseñas",
          footer: error.message,
        });
      });
  };

  const limpiarCampos = () => {
    setNombre("");
    setContenido("")

    setEditar(false);
  };

  const editarForm = (dto) => {
    setNombre(dto.nombre);
    setContenido(dto.contenido);
    setId(dto.id);
    setEditar(true);
  };
  return (
    <div className="container">
      <div className="App">
        <div className="card text-center mt-3 shadow">
          <div className="card-header bg-primary text-white fs-6 fw-bold">
            GESTIÓN DE ADOPCIONES
          </div>
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-sm-3">
                <label className="form-label">Porporciónanos tu nombre:</label>
              </div>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  value={nombreAdoptante}
                  onChange={(e) => {
                    setNombre(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-3">
                <label className="form-label">Escribe aquí tu reseña:</label>
              </div>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  value={telefono}
                  onChange={(e) => {
                    setContenido(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="card-footer">
              {editar ? (
                <div>
                  <button
                    onClick={handleEditar}
                    type="Button"
                    className="btn btn-info m-2"
                  >
                    Actualizar
                  </button>
                  <button
                    onClick={limpiarCampos}
                    type="Button"
                    className="btn btn-warning"
                  >
                    Cancelar
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    onClick={handleCrear}
                    type="Button"
                    className=" btn btn-primary m-2"
                  >
                    Guardar
                  </button>
                  <button
                    onClick={limpiarCampos}
                    type="Button"
                    className="btn btn-warning"
                  >
                    Cancelar
                  </button>
                </div>
              )}
            </div>

            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre </th>
                    <th scope="col">Reseña</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider table-info table-striped">
                  {lista.map((dto, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row"> {index + 1}</th>
                        <td>{dto.nombre}</td>
                        <td>{dto.contenido}</td>
                        <td>
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="acciones"
                          >
                            <button
                              type="button"
                              className="btn btn-info"
                              onClick={() => {
                                editarForm(dto);
                              }}
                            >
                              {" "}
                              Editar{" "}
                            </button>
                            <button
                              type="button"
                              className="btn btn-info"
                              onClick={() => {
                                handleEliminar(dto);
                              }}
                            >
                              Eliminar
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reseña;