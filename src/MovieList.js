import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <Container>
      {movies.map((movie) => (
        <Movie movie={movie} />
      ))}
    </Container>
  );
};

export default MovieList;
