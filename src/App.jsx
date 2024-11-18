import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "./components/msovieList";
import MovieCard from "./components/MovieCard";

function App() {
  const [movies, setMovies] = useState([]);
  const [movieName, setMoviesName] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get("https://dummyapi.online/api/movies");
      console.log(response.data);
      setMovies(response.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleSearch = () => {
    const foundMovie = movies.find(
      (movie) => movie.movie.toLowerCase() === movieName.toLowerCase()
    );

    if (foundMovie) {
      setSelectedMovie(foundMovie);
    } else {
      setSelectedMovie(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={movieName}
        onChange={(e) => setMoviesName(e.target.value)}
        placeholder="Search for a movie"
      />
      <button onClick={handleSearch}>Submit</button>

      {selectedMovie && <MovieCard movie={selectedMovie} />}

      {!selectedMovie && <MovieList movies={movies} />}
    </div>
  );
}

export default App;
