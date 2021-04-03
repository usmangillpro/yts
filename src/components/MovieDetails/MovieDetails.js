import React, { useEffect } from "react";
import detailsAction from "../../redux/actions/detailsAction";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DownloadTab from "./DownloadTab";
import Comments from "./Comments";
import Cast from "./Cast";
import MovieSuggestions from "./MovieSuggestions";
import "./MovieDetails.css";
import imdb from "./imdb.png";

const MovieDetails = () => {
  const data = useSelector((state) => state.details);
  const tor = data.torrents;
  const cast = data.cast;
  // const rendertorrents = tor.map((items) => console.log(items));
  // const data_2 = useSelector((state) => state.details.torrents);
  const dispatch = useDispatch();
  const { movieId } = useParams();

  // console.log(rendertorrents);

  useEffect(() => {
    dispatch(detailsAction(movieId));
  }, [dispatch, movieId]);
  console.log(data);
  const torrentsList = () => {
    if (!tor) {
      return (
        <div className="spinner-border m-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      );
    }
    return tor.map((item) => {
      return (
        <div key={item.hash} className=" d-flex row">
          <div className="col-2">
            <a
              href={item.url}
              className="badge bg-secondary text-decoration-none"
              style={{ marginLeft: "7px" }}
            >
              {`${item.quality}.${item.type}`}
            </a>
          </div>
        </div>
      );
    });
  };
  return (
    <div
      key={data.id}
      className="row"
      style={{
        backgroundImage: `
        linear-gradient(to bottom, rgba(199, 219, 209, 0.7), rgba(83, 166, 124, 0.6)),url(${data.background_image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="col-12 d-flex justify-content-evenly mt-4">
          <img
            className="col-3"
            src={data.medium_cover_image}
            alt={data.title}
            style={{ maxWidth: "min-content" }}
          />
          <div className="col-3">
            <h3>Cast</h3>
            <hr style={{ width: "50%" }} />
            <Cast cast={cast} />
          </div>

          <div className="col-4" style={{ maxWidth: "30%" }}>
            <h3>{data.title}</h3>
            <p>{data.year}</p>
            <pre>{`${data.genres}`}</pre>
            <div className="d-flex flex-row flex-wrap">
              Available: {torrentsList()}
            </div>
            <hr className="hr-style primary" />
            <div className="d-flex mt-1">
              <i className="bi-heart-fill" />
              <p className="position-relative top-50" style={{ left: 60 }}>
                {data.like_count}
              </p>
            </div>
            <div className="d-flex ">
              <a href={`https://www.imdb.com/title/${data.imdb_code}`}>
                <img
                  className="imdb mt-0 position-relative"
                  style={{ top: -15, left: 0 }}
                  src={imdb}
                  alt={data.title}
                />
              </a>
              <span style={{ position: "relative", top: -7, left: 40 }}>
                {data.rating}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <hr className="mt-3" />
        <h3 className="d-flex justify-content-center">
          Suggested Movies{" "}
          <i
            className="bi bi-star-fill"
            style={{ color: "#00cae3", marginLeft: "10px" }}
          />
        </h3>
        <div className="d-flex justify-content-evenly">
          <MovieSuggestions movieId={data.id} />
        </div>
      </div>
      <div>
        <Comments movieId={data.id} />
      </div>
    </div>
  );
};

export default MovieDetails;
