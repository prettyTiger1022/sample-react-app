import React from "react";
import { Card } from "react-bootstrap";
import "./App.css";

const Movie = (props) => {
  return (
    <div key={props.movie.id} className="movie">
      <Card style={{ width: "15rem" }}>
        <Card.Body>
          <Card.Title> {props.movie.name} </Card.Title>
          <Card.Text>ID : {props.movie.id}</Card.Text>
          <Card.Text>Price : {props.movie.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Movie;
