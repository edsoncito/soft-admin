import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchDelateNewsNotice,
  fetchNewsNotice,
  fetchUpdateNewsNotice,
} from "../../../services/newsNotice/newsNoticeApi";

const Dashboard = () => {
  const { isLoading, data, error } = useSelector((state) => state.newsNotice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) {
      dispatch(fetchNewsNotice());
    }
  }, []);

  useEffect(() => {
    if (data) {
    }
  }, [data]);

  const handleSubmit = async (element) => {
    console.log(element);
    const params = {
      name: element.name,
      description: element.description,
      imageURL: element.imageURL,
      isVisible: !element.isVisible,
    };
    // console.log("pareams", params);
    dispatch(fetchUpdateNewsNotice(element._id, params));
  };

  const handledelateItem = async (id) => {
    console.log(id);
    dispatch(fetchDelateNewsNotice(id));
  };

  return (
    <>
      <h3 className="text-center">Dashboard</h3>
      <div className="d-flex justify-content-between">
        <Link
          className="btn btn-sm  mb-2"
          style={{
            backgroundColor: "#065018",
            color: "#fff",
          }}
          to="/dashboard/AddNotice"
        >
          Agregar
        </Link>
      </div>
      <div className="card mb-3 table-responsive">
        <div className="card-body">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <div className="row">
              {data?.products?.map((element) => {
                return (
                  <div className="row" key={element.id}>
                    <div className="col-sm-6 col-md-4">
                      <img src={element.imageURL} alt="#" className="img-thumbnail" />
                    </div>
                    <div className="col-sm-6 col-md-8">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                          checked={element.isVisible}
                          onChange={() => handleSubmit(element)}
                        />
                      </div>
                      <button
                        type="button"
                        className="btn btn-sm btn-danger"
                        onClick={() => handledelateItem(element._id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
