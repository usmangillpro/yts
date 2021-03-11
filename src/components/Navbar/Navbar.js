import React from "react";
import { Link } from "react-router-dom";

import Search from "../Search/Search";
import "./styles.css";

const Navbar = () => {
  return (
    <div className="z-down">
      <nav className="navbar navbar-expand-lg navbar-light bg-color-nav rounded-bottom">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand d-flex">
            <i className="bi bi-film" />
            <span className="mr-4" />
            <h3 style={{ marginLeft: "12px" }}>YTS-Gill</h3>
          </Link>
          <Search />
          <div className="d-flex ml-auto">
            <Link to="/signin" className="navbar-brand">
              <h4>Sign In</h4>
            </Link>
            <Link to="/signup" className="navbar-brand">
              <h4>Signup</h4>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
