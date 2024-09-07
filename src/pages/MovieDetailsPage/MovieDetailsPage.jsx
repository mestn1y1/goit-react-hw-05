import {
  Outlet,
  useParams,
  NavLink,
  Link,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieDetail } from "../../../getMovies";
import css from "./MovieDetailsPage.module.css";
import clsx from "clsx";
import { Circles } from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  const getClassName = (props) => {
    return clsx(css.link, props.isActive && css.isActive);
  };

  useEffect(() => {
    async function fetchMovieDetails() {
      setLoading(true);
      setError(null);
      try {
        const data = await getMovieDetail(movieId);
        setMovie(data);
      } catch (error) {
        setError("Error fetching movie details.");
        toast.error("Error fetching movie details.");
      } finally {
        setLoading(false);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      <Link to={location.state || "/"}>
        <button className={css.goBackBtn}>Go back</button>
      </Link>

      {loading && (
        <div className={css.loader}>
          <Circles
            height="80"
            width="80"
            color="orangered"
            ariaLabel="circles-loading"
            visible={true}
          />
        </div>
      )}

      {error && <p className={css.error}>{error}</p>}

      {movie && !loading && (
        <div className={css.container}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className={css.img}
          />
          <div className={css.containerDescription}>
            <h1>{movie.title}</h1>
            <p className={css.overview}>{movie.overview}</p>
            <p className={css.description}>
              Release Date: <span>{movie.release_date}</span>
            </p>
            <p className={css.description}>
              Runtime: <span>{movie.runtime}</span>
            </p>
            <p className={css.description}>
              Genres:{" "}
              <span>{movie.genres.map((genre) => genre.name).join(", ")}</span>
            </p>
            <p className={css.description}>
              Budget: <span>${movie.budget.toLocaleString()}</span>
            </p>
            <p className={css.description}>
              Revenue: <span>${movie.revenue.toLocaleString()}</span>
            </p>
            <p className={css.description}>
              Vote Average: <span>{movie.vote_average}</span>
            </p>
            <p className={css.description}>
              Vote Count: <span>{movie.vote_count}</span>
            </p>
            <p className={css.description}>
              Status: <span>{movie.status}</span>
            </p>
            <a
              href={movie.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className={css.movieLink}
            >
              Official Website
            </a>
          </div>
        </div>
      )}

      <h2 className={css.titleDescription}>Additional information</h2>
      <ul className={css.list}>
        <li>
          <NavLink to="cast" className={getClassName}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={getClassName}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
