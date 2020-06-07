import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "The Avangers",
      price: "$50",
    },
    {
      name: "Captain America",
      price: "$40",
    },
    {
      name: "Hulk",
      price: "$50",
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
