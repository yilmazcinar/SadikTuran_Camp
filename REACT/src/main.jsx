import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App></App>
  </StrictMode>
);

function App() {
  return (
    <>
      <Header />
      <MovieList />
    </>
  );
}

function Header() {
  return (
    <div>
      <h1>Header</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident,
        eaque illum aspernatur at id beatae unde officia qui maxime quod.
      </p>
    </div>
  );
}

function MovieList() {
  return (
    <div>
      <h2>Movie List</h2>
      <div id="movie-list">
        <Movie />
        <Movie />
        <Movie />
      </div>
    </div>
  );
}

function Movie() {
  return (
    <div className="movie">
      <h3>Movie</h3>
      <p>Film Açıklaması</p>
    </div>
  );
}
