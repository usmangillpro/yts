import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import suggestionsAction from "../../redux/actions/suggestionsAction";

const MovieSuggestions = ({ movieId }) => {
  const data = useSelector((state) => state.suggestions);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(suggestionsAction(movieId));
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, movieId]);

  if (!data) {
    return (
      <div className="spinner-border m-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  return data.map((items) => {
    return (
      <div key={items.id} className=" mt-5" style={{ maxWidth: "200px" }}>
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

export default MovieSuggestions;
