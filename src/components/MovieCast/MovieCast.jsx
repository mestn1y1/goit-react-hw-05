import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../../getMovies";
import css from "./MovieCast.module.css";
import { Circles } from "react-loader-spinner";

export default function MoviesCast() {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      setLoading(true);
      try {
        const response = await getMovieCast(movieId);
        setCast(response.data.cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <div>
      <h2 className={css.title}>Movie Cast</h2>

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

      {!loading && cast.length > 0 && (
        <ul className={css.list}>
          {cast.map((actor) => (
            <li key={actor.cast_id} className={css.listItem}>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
                className={css.actorImage}
              />
              <div>
                <p>
                  <strong>{actor.name}</strong>
                </p>
                <p className={css.description}>Character: {actor.character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {!loading && cast.length === 0 && (
        <p className={css.descriptionMsg}>No cast information available.</p>
      )}
    </div>
  );
}
