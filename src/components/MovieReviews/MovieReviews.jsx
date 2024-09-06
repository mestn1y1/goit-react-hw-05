import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../../getMovies";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    async function getMovieReviews() {
      try {
        const response = await getReviews(movieId);
        setReviews(response.data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovieReviews();
  }, [movieId]);
  return (
    <div>
      <h2>Movie Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id} style={{ marginBottom: "20px" }}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available for this movie.</p>
      )}
    </div>
  );
}
