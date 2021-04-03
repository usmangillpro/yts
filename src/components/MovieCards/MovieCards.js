import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PopularDownloads from "./PopularDownloads";
import Upcoming from "./Upcoming";
import ytsFetch from "../../redux/actions/ytsFetch";

class MovieCards extends React.Component {
  componentDidMount() {
    this.props.ytsFetch();
  }

  renderList() {
    return this.props.ytsGet.map((item) => {
      return (
        <div
          key={item.id}
          className=" col-4 justify-content-evenly mb-5"
          style={{ maxWidth: "200px" }}
        >
          <Link to={`/details/${item.id}`}>
            <img
              src={item.medium_cover_image}
              className="card-img"
              alt={item.title}
            />
          </Link>
          <h6>{item.title_long}</h6>
          <br />
        </div>
      );
    });
  }

  render() {
    if (!this.props.ytsGet) {
      return "loading";
    }
    return (
      <div className="container">
        <div className="d-flex mt-5 row">
          <div className="row justify-content-evenly">
            <PopularDownloads />
          </div>
          <hr />
          <h3 className="d-flex justify-content-center">
            New Movies{" "}
            <i
              className="bi bi-star-fill"
              style={{ color: "rgb(234, 67, 53)", marginLeft: "10px" }}
            />
          </h3>
          <hr />
          <div className="row justify-content-evenly">{this.renderList()}</div>
          <hr />
          <div className="d-flex row">
            <div className="row justify-content-evenly">
              <Upcoming />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ytsGet: state.ytsGet };
};

export default connect(mapStateToProps, { ytsFetch })(MovieCards);
