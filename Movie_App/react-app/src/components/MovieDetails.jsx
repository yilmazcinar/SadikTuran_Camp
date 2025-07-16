import { useState, useEffect } from "react";

const api_key = "02bc9cf3084e8a562bcf63b869b00f6e";
const language = "tr-TR";

function MovieDetails({ movieObj, onClose }) {
  const [loadedMovie, setLoadedMovie] = useState(null);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieObj.id}?api_key=${api_key}&language=${language}&append_to_response=credits`
        );

        const data = await response.json();
        console.log("Movie details with credits:", data);
        setLoadedMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }

    if (movieObj?.id) {
      getMovieDetails();
    }
  }, [movieObj.id]);

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
        {/* Backdrop Image */}
        {movieObj.backdrop_path && (
          <div
            className="position-absolute top-0 start-0 w-100 rounded-top"
            style={{
              height: "350px",
              backgroundImage: `url(https://image.tmdb.org/t/p/w780${movieObj.backdrop_path})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 1,
            }}
          >
            <div
              className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 rounded-top"
              style={{ zIndex: 2 }}
            ></div>
          </div>
        )}

        <button
          className="btn-close position-absolute top-0 end-0 m-3"
          onClick={onClose}
          aria-label="Close"
          style={{ zIndex: 10 }}
        ></button>

        <div
          className={`mt-4 ${movieObj.backdrop_path ? "pt-5" : ""}`}
          style={{ position: "relative", zIndex: 3 }}
        >
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

          {loadedMovie && (
            <>
              {loadedMovie.runtime && (
                <p>
                  <strong>Süre:</strong> {loadedMovie.runtime} dakika
                </p>
              )}

              {loadedMovie.genres && loadedMovie.genres.length > 0 && (
                <p>
                  <strong>Türler:</strong>{" "}
                  {loadedMovie.genres.map((g) => g.name).join(", ")}
                </p>
              )}
              {loadedMovie.tagline && (
                <p>
                  <strong>Tagline:</strong> {loadedMovie.tagline}
                </p>
              )}
              {loadedMovie.credits &&
                loadedMovie.credits.cast &&
                loadedMovie.credits.cast.length > 0 && (
                  <div>
                    <h5 className="mb-3">Oyuncular:</h5>
                    <div className="row row-cols-2 row-cols-md-3 g-3">
                      {loadedMovie.credits.cast.slice(0, 6).map((actor) => (
                        <div key={actor.id} className="col">
                          <div className="text-center">
                            {actor.profile_path ? (
                              <img
                                src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                                alt={actor.name}
                                className="img-fluid rounded-circle mb-2"
                                style={{
                                  width: "80px",
                                  height: "80px",
                                  objectFit: "cover",
                                }}
                              />
                            ) : (
                              <div
                                className="bg-secondary rounded-circle mb-2 d-flex align-items-center justify-content-center"
                                style={{
                                  width: "80px",
                                  height: "80px",
                                  margin: "0 auto",
                                }}
                              >
                                <i className="bi bi-person-fill text-white fs-3"></i>
                              </div>
                            )}
                            <p className="mb-1 fw-bold small">{actor.name}</p>
                            <p className="mb-0 text-muted small">
                              {actor.character}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
