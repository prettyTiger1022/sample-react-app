import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";
import "./App.css";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <Container className="movieList">
      <h1> Movies : </h1>
      {movies.map((movie) => (
        <Movie movie={movie} />
      ))}
    </Container>
  );
};

export default MovieList;
