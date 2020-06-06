import React, {useState, createContext} from 'react'

export const MovieContext = createContext();

export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([
        {
          name: "The Avangers",
          price: "$100",
          id: 1111,
        },
        {
          name: "Captain America",
          price: "$40",
          id: 1112,
        },
        {
          name: "Hulk",
          price: "$30",
          id: 1113,
        },
      ]);

    return (
        <MovieContext.Provider value = {[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>        
    );
}
