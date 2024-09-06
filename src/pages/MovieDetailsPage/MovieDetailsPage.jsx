import { Outlet, useParams, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieDetail } from "../../../getMovies";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const data = await getMovieDetail(movieId);
        setMovie(data);
      } catch (error) {
        setError("Error fetching movie details.");
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  return (
    <>
      {movie && (
        <div>
          <h1>{movie.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            style={{ width: "300px", height: "auto" }}
          />
          <p>{movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Runtime: {movie.runtime}</p>
          <p>Genres: {movie.genres.map((genre) => genre.name).join(", ")}</p>
          <p>Budget: ${movie.budget.toLocaleString()}</p>
          <p>Revenue: ${movie.revenue.toLocaleString()}</p>
          <p>Vote Average: {movie.vote_average}</p>
          <p>Vote Count: {movie.vote_count}</p>
          <p>Status: {movie.status}</p>
          <p>
            <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
              Official Website
            </a>
          </p>
        </div>
      )}
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
