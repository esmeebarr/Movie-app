import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
  render() {
    const { Title, Poster, Year, imdbID } = this.props.movie;
    const { fetchInfo } = this.props;

    return (
      <div className="card" onClick={() => fetchInfo(imdbID)}>
        <img src={Poster}></img>
        <h2 className="title">{Title}</h2>
        <h4 className="year">{Year}</h4>
      </div>
    );
  }
}
