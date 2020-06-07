import React from "react";
import "./App.css";
import MovieList from "./MovieList";
import Nav from "./Nav";
import { MovieProvider } from "./MovieContext";
import AddMovie from "./AddMovie";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Nav />
        <hr />
        <AddMovie />
        <br />
        <h1> Movies </h1>
        <MovieList />
      </MovieProvider>
    </div>
  );
}

export default App;
