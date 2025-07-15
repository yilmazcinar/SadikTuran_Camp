import React from "react";

function MovieDetails({ movieObj, onClose }) {
  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center"
      style={{ zIndex: 1050 }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded p-4 position-relative"
        style={{
          maxWidth: "600px",
          width: "90%",
          maxHeight: "80%",
          overflow: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="btn-close position-absolute top-0 end-0 m-3"
          onClick={onClose}
          aria-label="Close"
        ></button>

        <div className="mt-4">
          {movieObj.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${movieObj.poster_path}`}
              alt={movieObj.title}
              className="img-fluid rounded mb-3"
              style={{ maxHeight: "300px" }}
            />
          )}

          <h2 className="mb-3">{movieObj.title}</h2>

          {movieObj.release_date && (
            <p>
              <strong>Çıkış Tarihi:</strong> {movieObj.release_date}
            </p>
          )}

          {movieObj.vote_average && (
            <p>
              <strong>IMDB Puanı:</strong> {movieObj.vote_average}/10
            </p>
          )}

          {movieObj.overview && (
            <div>
              <h5>Özet:</h5>
              <p>{movieObj.overview}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
