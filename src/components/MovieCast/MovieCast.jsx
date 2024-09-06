import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../../getMovies";
export default function MoviesCast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    async function getCast() {
      try {
        const response = await getMovieCast(movieId);
        setCast(response.data.cast);
      } catch (error) {
        console.log(error.message);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <div>
      <h2>Movie Cast</h2>
      {cast.length > 0 && (
        <ul>
          {cast.map((actor) => (
            <li
              key={actor.cast_id}
              style={{ listStyleType: "none", margin: "10px 0" }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
                style={{ width: "100px", height: "auto", marginRight: "10px" }}
              />
              <div>
                <p>
                  <strong>{actor.name}</strong>
                </p>
                <p>Character: {actor.character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
