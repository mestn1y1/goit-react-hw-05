import { Link } from "react-router-dom";

export default function MovieList({ trendingMovies }) {
  return (
    <ul>
      {trendingMovies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
}
