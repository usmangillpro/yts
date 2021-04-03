import React from "react";
import blank from "../assets/blank.png";

const Cast = ({ cast }) => {
  if (!cast) {
    return "";
  }
  return cast.map((item) => {
    console.log(item);
    return (
      <div
        key={item.imdb_code}
        className="d-flex mt-3"
        style={{ maxWidth: "18rem" }}
      >
        <img
          src={item.url_small_image ? item.url_small_image : blank}
          alt={item.name}
          style={{
            maxWidth: "40px",
            borderRadius: "30px",
            marginRight: "10px",
          }}
        />
        <h6 style={{ position: "relative", top: 10 }}>{item.name}</h6>
      </div>
    );
  });
};

export default Cast;
