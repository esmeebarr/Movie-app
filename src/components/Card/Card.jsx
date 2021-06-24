import "./Card.css";
import React, { useState } from "react";

const Card = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const favoriteMovie = (movie) => {
    setFavoriteMovies(favoriteMovies.conMovie(movie));
  };

  Card = () => {
    {
      const { Title, Poster, Year, imdbID } = this.props.movie;
      const { fetchInfo } = this.props;

      return (
        <div className="card" onClick={() => fetchInfo(imdbID)}>
          <img className="img" src={Poster}></img>
          <h2 className="title">{Title}</h2>
          <h4 className="year">{Year}</h4>
          {/* <button
          onClick={() => favoriteMovie(currentMovie)}
          className="heart-icon"
        > */}
          {/* <Favourites size="30" color="#f44336" /> */}
          {/* </button> */}
        </div>
      );
    }
  };
};
export default Card;
