import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAddNewsNotice } from "../../../services/newsNotice/newsNoticeApi";

const AddNotice = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.newsNotice);

  const [obj, setObj] = useState({
    imageURL: {
      value: "",
      error: false,
    },
    name: {
      value: "",
      error: false,
    },
    description: {
      value: "",
      error: false,
    },
    isVisible: {
      value: "",
      error: false,
    },
  });

  const handleChange = (event, id) => {
    obj[id] = {
      value: event,
      error: false,
    };
    setObj({ ...obj });
  };

  const handleSubmit = async () => {
    let exito = true;
    for (const key in obj) {
      if (key === "isVisible") continue;
      if (obj[key].value.length === 0) {
        obj[key].error = true;
        exito = false;
      }
    }
    if (!exito) {
      setObj({ ...obj });
      alert("falta campo para rellenar");
      return;
    }
    const params = {
      name: obj.name.value,
      description: obj.description.value,
      imageURL: obj.imageURL.value,
      isVisible: true,
    };
    dispatch(fetchAddNewsNotice(params));
  };

  return (
    <>
      <div className="alert alert-success alert-dismissible fade show" role="alert">
        Registro exitoso
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>

      <h3 className="text-center">Agregar especialidades</h3>
      <button type="button" className="btn btn-sm btn-secondary mb-2" onClick={() => navigate(-1)}>
        regresar
      </button>

      <div className="card mb-3">
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">Imagen</label>
            <input
              type="text"
              className="form-control"
              name="imagen"
              placeholder="Url"
              value={obj.imageURL.value}
              onChange={(e) => handleChange(e.target.value, "imageURL")}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="Name"
              maxLength={50}
              placeholder="Name"
              value={obj.name.value}
              onChange={(e) => handleChange(e.target.value, "name")}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Descripción *</label>
            <input
              type="text"
              className="form-control"
              name="descripcion"
              maxLength={50}
              placeholder="Descripcion"
              value={obj.description.value}
              onChange={(e) => handleChange(e.target.value, "description")}
            />
          </div>
        </div>
        <div className="card-footer">
          <button type="button" className="btn btn-sm btn-danger me-2" onClick={() => navigate(-1)}>
            Cancelar
          </button>
          {isLoading ? (
            <button className="btn btn-sm btn-primary" type="button" disabled>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              cargando...
            </button>
          ) : (
            <button type="submit" className="btn btn-sm btn-primary" onClick={() => handleSubmit()}>
              Registrar
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default AddNotice;
