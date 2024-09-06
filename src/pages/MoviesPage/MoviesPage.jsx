import { useState, useEffect } from "react";
import { searchMovie } from "../../../getMovies";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMoviesByQuery() {
      if (!query) return;

      try {
        const response = await searchMovie(query);
        setMovies(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.log(error.message);
      }
    }

    getMoviesByQuery();
  }, [query]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const searchQuery = form.elements.query.value.trim();
    setQuery(searchQuery);
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" placeholder="Search movies" />
        <button type="submit">Search</button>
      </form>

      {movies.length > 0 && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              {movie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  style={{ width: "100px", height: "auto" }}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
