import React from "react";
import { connect } from "react-redux";

import ytsFetch from "../redux/actions/ytsFetch";

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
          <img
            src={item.medium_cover_image}
            className="card-img"
            alt={item.title}
          />
          <h6>{item.title_long}</h6>
        </div>
      );
    });
  }

  render() {
    if (!this.props.ytsGet) {
      return "loading";
    }
    // console.log(this.renderList());
    return (
      <div className=" d-flex mt-5">
        <div className="row justify-content-evenly">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ytsGet: state.ytsGet };
};

export default connect(mapStateToProps, { ytsFetch })(MovieCards);
