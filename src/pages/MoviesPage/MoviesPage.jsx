import { useState, useEffect } from "react";
import { searchMovie } from "../../../getMovies";
import { useSearchParams, Link, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Circles } from "react-loader-spinner";
import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [params, setParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const query = params.get("query");

  useEffect(() => {
    async function getMoviesByQuery() {
      if (!query) return;
      setLoading(true);
      setMovies([]);
      setError(null);
      try {
        const response = await searchMovie(query);
        if (response.data.results.length === 0) {
          toast.info("No results found.");
        } else {
          setMovies(response.data.results);
        }
      } catch (error) {
        toast.error(`Error: ${error.message}`);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getMoviesByQuery();
  }, [query]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const searchQuery = evt.currentTarget.elements.query.value.trim();
    if (searchQuery) {
      setParams({ query: searchQuery });
    }
    evt.currentTarget.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="query"
          placeholder="Search movies"
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
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
      {movies.length > 0 && (
        <ul className={css.list}>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={location}>
                <h3 className={css.title}>{movie.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <ToastContainer
        position="top-right"
        autoClose={2000}
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
