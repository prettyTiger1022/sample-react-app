import React from "react";
import "./App.css";
import MovieList from "./MovieList";
import { Container, ListGroup } from "react-bootstrap";
import Nav from "./Nav";
import { MovieProvider } from "./MovieContext";
import AddMovie from './AddMovie';

function App() {
  return (

    <MovieProvider>
      <Nav />
      <MovieList className = 'App' />
      <br />
      <AddMovie className = 'App'/>
    </MovieProvider>

  );
}

export default App;
