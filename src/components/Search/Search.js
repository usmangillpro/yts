import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import searchAction from "../../redux/actions/searchAction";

const Search = () => {
  const [term, setTerm] = useState("");
  const data = useSelector((state) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (term.length > 2) dispatch(searchAction(term));
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, term]);

  const SearchResult = data.map((item) => {
    return item.title ? (
      <ul key={item.id} className="list-group ">
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
    ) : null;
  });

  return (
    <div>
      <input
        placeholder="Search"
        className="form-control me-2"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <div style={{ position: "absolute" }}>{SearchResult}</div>
    </div>
  );
};

export default Search;
