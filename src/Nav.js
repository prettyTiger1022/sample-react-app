import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import "./App.css";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <nav className="App-header">
      <h2> List of Movies : {movies.length}</h2>
    </nav>
  );
};

export default Nav;
