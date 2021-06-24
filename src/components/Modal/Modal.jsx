import React, { useState } from "react";
import "./Modal.css";

const Modal = () => {
  const { Title, Plot, Runtime, Genre, Poster } = this.props.currentMovie;

  return (
    <div className="modal" onClick={this.props.closeModal}>
      <div className="modalContainer">
        <span className="close" onClick={this.props.closeModal}></span>
      </div>
    </div>
  );
};

export default Modal;
