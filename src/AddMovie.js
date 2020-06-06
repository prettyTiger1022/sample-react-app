import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";
import {
  Button,
  Col,
  Container,
  FormControl,
  ListGroup,
  Row,
} from "react-bootstrap";

const AddMovie = () => {
  const [movieName, setMovieName] = useState("");
  const [moviePrice, setMoviePrice] = useState("");
  const [movieId, setMovieId] = useState("");

  const [movies, setMovies] = useContext(MovieContext);

  const onAddMovieName = (e) => {
    setMovieName(e.target.value);
  };

  const onAddMoviePrice = (e) => {
    setMoviePrice(e.target.value);
  };

  const onAddMovieId = (e) => {
    setMovieId(e.target.value);
  };

  const onAddMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [
      ...movies,
      { name: movieName, price: moviePrice, id: movieId },
    ]);
  };

  return (
    <div>
      <Row>
        <Col md={5}> Movie Name :
          <FormControl
            value={movieName}
            onChange={onAddMovieName}
          ></FormControl>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={5}>
          Movie Price :
          <FormControl
            value={moviePrice}
            onChange={onAddMoviePrice}
          ></FormControl>
        </Col>
      </Row>
      <br />
      <Row>
          <Col md={5}>
          Movie Id :
          <FormControl value={movieId} onChange={onAddMovieId}></FormControl>
        </Col>
      </Row>
      \
      <br />
      <Button onClick={onAddMovie}>Add Movie</Button>
    </div>
  );
};

export default AddMovie;
