import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ trendingMovies }) {
  const location = useLocation();
  return (
    <div>
      <h2 className={css.title}>Trending day</h2>
      <ul className={css.list}>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={location.state}
              className={css.link}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
