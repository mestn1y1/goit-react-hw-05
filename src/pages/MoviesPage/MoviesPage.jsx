import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieDetail } from "../../../getMovies";

export default function MoviesPage() {
  // const { moviesId } = useParams();
  // const [movies, setMovies] = useState(null);

  return (
    <div>
      <input type="text" placeholder="Search film" />
    </div>
  );
}
