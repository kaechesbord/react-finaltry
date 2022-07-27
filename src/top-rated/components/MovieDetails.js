import React from "react";
import "./comp.css";

const MovieDetails = (props) => {

  function cancelbtnClose() {
    props.onCancel();
  }
  function confirmbtnClose() {
    props.onConfirm();
  }

  return (
  <div className="yes-modal">
    <h1 className="title">{props.title}</h1>
    <button onClick={cancelbtnClose}>Cancel</button>
    <button onClick={confirmbtnClose}>Confirm</button>
  </div>
  );
};
export default MovieDetails;
