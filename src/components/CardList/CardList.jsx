import React, { Component } from "react";
import "./CardList.css";
import Card from "../Card/Card";

export default class CardList extends Component {
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

  render() {
    return (
      <div className="cardList">
        {this.props.movies ? this.getMovies() : this.getErrorMsg()}
      </div>
    );
  }
}
