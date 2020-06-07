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
        <MovieList />
        <br />
        <AddMovie />
      </MovieProvider>
    </div>
  );
}

export default App;
