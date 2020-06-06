import React, {useContext} from "react";
import {MovieContext} from './MovieContext'

const Nav = () => {

    const [movies, setMovies] = useContext(MovieContext);

  return (
  <nav>
      <h2> List of Movies : {movies.length}</h2>
  </nav>
  );
};

export default Nav;
