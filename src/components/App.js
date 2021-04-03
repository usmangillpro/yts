import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import MovieCards from "./MovieCards/MovieCards";
import MovieDetails from "./MovieDetails/MovieDetails";
import history from "../history";

import "../components/assets/App.css";

const App = () => {
  return (
    <div className="hero-background">
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <MovieCards />
          </Route>
          <Route exact path="/details/:movieId">
            <MovieDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
