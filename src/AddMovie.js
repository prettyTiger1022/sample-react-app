import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";
import {
  Button,
  Col,
  FormControl,
  Row,
  Form,
  FormLabel,
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

    setMovieName("");
    setMoviePrice("");
    setMovieId("");
  };

  return (
    <div className="addMovie">
      <Form.Group>
        <Form.Label> Movie Name </Form.Label>
        <Form.Control
          md={5}
          placeholder="Movie Name"
          value={movieName}
          onChange={onAddMovieName}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label> Movie Price </Form.Label>
        <Form.Control
          placeholder="Movie Price"
          value={moviePrice}
          onChange={onAddMoviePrice}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label> Movie Id </Form.Label>
        <Form.Control
          placeholder="Movie Id"
          value={movieId}
          onChange={onAddMovieId}
        />
      </Form.Group>
      <Button onClick={onAddMovie}>Submit</Button>
    </div>
  );
};

export default AddMovie;
