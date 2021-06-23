import React, { Component } from "react";
import "./CardList.css";
import Card from "../Card/Card";

CardList = (props) => {
  getMovies = () => {
    const { movies, fetchInfo } = this.props;
    return movies.map((movie) => (
      <Card key={movie.imdbID} movie={movie} fetchInfo={fetchInfo} />
    ));
  };

  getErrorMsg = () => {
    const { searchTerm } = this.props;
    return searchTerm.length < 1
      ? "Enter a title to search for a movie..."
      : "Sorry there are no results to display...";
  };

  return (
    <div className="cardList">
      {this.props.movies ? this.getMovies() : this.getErrorMsg()}
    </div>
  );
};

export default CardList;
