import React from "react";
import { ListGroupItem, Card } from "react-bootstrap";

const Movie = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title> {props.movie.name} </Card.Title>
        <Card.Text>ID : {props.movie.id}</Card.Text>
        <Card.Text>Price : {props.movie.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Movie;
