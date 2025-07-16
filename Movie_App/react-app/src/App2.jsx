import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

import Logo from "./components/Logo";
import SearchForm from "./components/SearchForm";
import WatchListButton from "./components/WatchListButton";

import MovieList from "./components/MovieList";
import WatchList from "./components/WatchList";
import Loading from "./components/Loading";
import MovieDetails from "./components/MovieDetails";

const api_key = "02bc9cf3084e8a562bcf63b869b00f6e";
const page = 1;
const query = "batman";
const language = "tr-TR";

export default function App2() {
  const [movies, setMovies] = useState([]);
  const [watchListMovies, setWatchListMovies] = useState([]);
  const [isWatchListOpen, setIsWatchListOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(query);
  const [selectedMovie, setSelectedMovie] = useState(null);

  //mounting => ilk render edilme anı,
  //re-render => state değiştiğinde yeniden render edilme,
  //umount => componentin DOM'dan kaldırılması.

  useEffect(() => {
    async function getMovies() {
      setLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchQuery}&page=${page}&language=${language}`
      );

      const data = await response.json();
      setMovies(data.results || []);
      setLoading(false);
    }

    if (searchQuery.length > 0) {
      getMovies();
    } else {
      setMovies([]);
      setLoading(false);
    }
  }, [searchQuery]);

  function handleAddToWatchList(movie) {
    const isAddedToList = watchListMovies.map((i) => i.id).includes(movie.id);

    if (!isAddedToList) {
      setWatchListMovies((movies) => [...movies, movie]);
    }
  }

  function handleRemoveFromWatchList(movie) {
    setWatchListMovies((movies) => movies.filter((i) => i.id !== movie.id));
  }

  function handleSelectedMovie(movie) {
    setSelectedMovie(movie);
  }

  return (
    <>
      <Header>
        <Logo />
        <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <WatchListButton
          movies={watchListMovies}
          onSetIsWatchListOpen={setIsWatchListOpen}
        />
      </Header>

      <Main>
        {selectedMovie && (
          <MovieDetails
            movieObj={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        )}
        <WatchList
          movies={watchListMovies}
          isWatchListOpen={isWatchListOpen}
          onRemoveFromWatchList={handleRemoveFromWatchList}
        />

        {loading ? (
          <Loading />
        ) : (
          <MovieList
            movies={movies}
            onAddToList={handleAddToWatchList}
            onHandleSelectedMovie={handleSelectedMovie}
          />
        )}
      </Main>
      <Footer />
    </>
  );
}
