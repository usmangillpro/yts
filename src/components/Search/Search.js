import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import searchAction from "../../redux/actions/searchAction";
// import MovieDetails from "../MovieDetails/MovieDetails";
const Search = () => {
  const [term, setTerm] = useState("");
  const [open, setOpen] = useState(false);
  const data = useSelector((state) => state.search);

  const dispatch = useDispatch();
  const searchRef = useRef();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (term.length > 2) dispatch(searchAction(term));
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, term]);

  useEffect(() => {
    document.body.addEventListener("click", (event) => {
      if (searchRef.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    });
  }, []);

  const SearchResult = data.map((item) => {
    return item.title && term.length > 2 ? (
      <Link
        to={`/details/${item.id}`}
        key={item.id}
        className="text-decoration-none"
      >
        <ul
          className="list-group list-group-item-action"
          onClick={() => setOpen(!open)}
        >
          <li className="list-group-item">
            <img
              src={item.medium_cover_image}
              style={{ maxWidth: "40px", marginRight: "4px" }}
              alt={item.title}
              className="rounded float-start"
            />
            {item.title_long}
          </li>
        </ul>
      </Link>
    ) : null;
  });

  return (
    <div ref={searchRef}>
      <input
        onFocus={() => setOpen(true)}
        placeholder="Search"
        className="form-control me-2"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <div
        style={{ position: "absolute" }}
        className={`${open ? "collapse show" : "collapse collapsing"}`}
      >
        {SearchResult}
      </div>
    </div>
  );
};

export default Search;
