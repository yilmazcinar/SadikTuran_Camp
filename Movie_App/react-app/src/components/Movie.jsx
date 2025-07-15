export default function Movie({
  movieObj,
  onAddToList,
  onHandleSelectedMovie,
}) {
  return (
    <div className="col">
      {movieObj && (
        <div
          className="card movie position-relative"
          onClick={() => {
            if (
              onHandleSelectedMovie &&
              typeof onHandleSelectedMovie === "function"
            ) {
              onHandleSelectedMovie(movieObj);
            } else {
              console.error(
                "onHandleSelectedMovie is not a function:",
                onHandleSelectedMovie
              );
            }
          }}
          style={{ cursor: "pointer" }}
        >
          <img
            src={"https://image.tmdb.org/t/p/original/" + movieObj.poster_path}
            alt=""
            className="card-img-top"
          />
          <div className="card-body">
            <h2 className="h6 card-title">{movieObj.title}</h2>
            {movieObj.is_new && (
              <span className="position-absolute top-0 end-0 badge bg-danger m-1">
                New
              </span>
            )}
            <button
              className="btn btn-link fs-5 text-danger position-absolute top-0 start-0"
              onClick={(e) => {
                e.stopPropagation();
                onAddToList(movieObj);
              }}
            >
              <i className="bi bi-plus-circle"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
