import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";
import { Button, Form } from "react-bootstrap";

const AddMovie = () => {
  const [movieName, setMovieName] = useState("");
  const [moviePrice, setMoviePrice] = useState("");

  const [movies, setMovies] = useContext(MovieContext);

  const onAddMovieName = (e) => {
    setMovieName(e.target.value);
  };

  const onAddMoviePrice = (e) => {
    setMoviePrice(e.target.value);
  };

  const onAddMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [
      ...movies,
      { name: movieName, price: moviePrice },
    ]);

    setMovieName("");
    setMoviePrice("");
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
      <Button onClick={onAddMovie}>Submit</Button>
    </div>
  );
};

export default AddMovie;
