// import { useState, useEffect } from "react";
// import { getTrendingMovie } from "../../../getMovies";
// import MovieList from "../../components/MovieList/MovieList";

// export default function HomePage() {
//   const [trendingMovies, setTrendingMovies] = useState([]);

//   useEffect(() => {
//     async function fetchMovies() {
//       try {
//         const data = await getTrendingMovie();
//         setTrendingMovies(data.results);
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     }
//     fetchMovies();
//   }, []);

//   return (
//     <div>
//       {trendingMovies.length > 0 ? (
//         <MovieList trendingMovies={trendingMovies} />
//       ) : (
//         <p>No movies found.</p>
//       )}
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { getTrendingMovie } from "../../../getMovies";
import MovieList from "../../components/MovieList/MovieList";
import { toast, ToastContainer } from "react-toastify";
import { Circles } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        const data = await getTrendingMovie();
        setTrendingMovies(data.results);
      } catch (error) {
        setError(error);
        toast.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <div className={css.loader}>
          <Circles
            height="80"
            width="80"
            color="orangered"
            ariaLabel="circles-loading"
            visible={true}
          />
        </div>
      ) : trendingMovies.length > 0 ? (
        <MovieList trendingMovies={trendingMovies} />
      ) : (
        <p>No movies found.</p>
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
