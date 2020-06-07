import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";
import "./App.css";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <Container className="movieList">
      {movies.map((movie) => (
        <Movie movie={movie} />
      ))}
    </Container>
  );
};

export default MovieList;
