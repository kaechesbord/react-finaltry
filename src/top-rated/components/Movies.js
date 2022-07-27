import React, { useState } from "react";
import LoadingSpinner from "../LoadingSpinner";
import Backdrop from "./Backdrop";
import MovieDetails from "./MovieDetails";

const Movies = (props) => {
    const [modal, setModal] = useState(false);

function HideModal() {
    setModal(false)
}
     function ShowModal() {
        setModal(true)
     }
  const Movie = (props) => {
    return (
      <div>
        <img
          onClick={ShowModal}
          src={`https://image.tmdb.org/t/p/w300/${props.movie.poster_path}`}
          alt=""
        />
      </div>
    );
  };
  return (
    <div>
      {props.loading ? (
        <LoadingSpinner />
      ) : (
        <div className="movies">
          {props.movies.map((movie) => (
            <Movie movie={movie} />
          ))}
        </div>
      )}
      {modal && <Backdrop onClick={HideModal}/>}
      {modal && <MovieDetails onCancel={HideModal} onConfirm={HideModal}/>}  
    </div>
  );
};

export default Movies;
