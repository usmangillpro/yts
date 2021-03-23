import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import popularAction from "../../redux/actions/popularAction";

const PopularDownloads = () => {
  const data = useSelector((state) => state.popular);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(popularAction());
  }, [dispatch]);

  const renderPopular = () => {
    if (!data)
      return (
        <div className="spinner-border m-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      );
    return data.map((items) => {
      return (
        <div key={items.id} style={{ maxWidth: "200px" }}>
          <Link to={`/details/${items.id}`}>
            <img
              src={items.medium_cover_image}
              className="card-img"
              alt={items.title}
            />
          </Link>
          <h6 className="mt-2">{items.title_long}</h6>
        </div>
      );
    });
  };

  return (
    <div>
      <h3 className="d-flex justify-content-center">
        Popular Downloads{" "}
        <i
          className="bi bi-star-fill"
          style={{ color: "seagreen", marginLeft: "10px" }}
        />
      </h3>
      <hr />
      <div className=" row justify-content-evenly mb-5"> {renderPopular()}</div>
    </div>
  );
};

export default PopularDownloads;
