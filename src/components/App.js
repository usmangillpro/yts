import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import MovieCards from "./MovieCards";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            {/* <MovieCards /> */}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
