import React, { Component, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import CardList from "./components/CardList/CardList";
import Modal from "./components/Modal/Modal";

import "./data/movies";

const App = () => {
  const State = {
    movies: [],
    currentMovie: {},
    infoModal: false,
    searchTerm: "",
    searchYear: "",
  };

  const updateSearch = (query) => {
    let key = "";
    let term = "";

    if (query.value.length < 1) {
      query.name === "title"
        ? (term = "movie")
        : (term = this.state.searchTerm);
      this.fetchMovies(term, "");
    }
    query.name === "title" ? (key = "searchTerm") : (key = "searchYear");
    this.setState({ [key]: query.value });
  };

  const handleChange = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      this.fetchMovies(this.state.searchTerm, this.state.searchYear);
    }
  };

  const fetchMovies = (searchTerm, searchYear) => {
    const apiKey = "ed77a58";

    fetch(
      `https://www.omdbapi.com/?s=${searchTerm}&y=${searchYear}&apikey=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }))
      .catch((error) => console.log(error));
  };

  const fetchInfo = (id) => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=ed77a58
    `)
      .then((response) => response.json())
      .then((data) => this.setState({ currentMovie: data, infoModal: true }))
      .catch((error) => console.log(error));
  };

  // const closeModal = (e) => {
  //   e.stopPropagation();
  //   this.setState({ infoModal: false });
  // };

  const componentDidMount = () => this.fetchMovies("movie", "");
  {
    const { movies, searchTerm, infoModal, currentMovie } = this.State;
    return (
      <>
        <NavBar
          updateSearch={this.updateSearch}
          handleChange={this.handleChange}
        />
        <CardList
          movies={movies}
          searchTerm={searchTerm}
          fetchInfo={this.fetchInfo}
        />
        {infoModal ? (
          <Modal currentMovie={currentMovie} closeModal={this.closeModal} />
        ) : null}
      </>
    );
  }
};
export default App;
