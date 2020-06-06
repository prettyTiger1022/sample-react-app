import React, {useContext}  from "react";
import { Container, ListGroup } from 'react-bootstrap';
import Movie from './Movie'
import {MovieContext} from './MovieContext'

const MovieList = () => {

const [movies, setMovies] = useContext(MovieContext);

  return (
    <Container>
      <ListGroup>
        {movies.map((movie) => (
          <Movie movie = {movie} />
        ))}
      </ListGroup>
    </Container>
  );
};

export default MovieList;
