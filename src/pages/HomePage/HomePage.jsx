import { useState, useEffect } from "react";
import { getTrendingMovie } from "../../../getMovies";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getTrendingMovie();
        setTrendingMovies(data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error); // Обработка ошибки в блоке catch
      }
    }
    fetchMovies();
  }, []); // Зависимости, пустой массив означает, что запрос выполнится только при монтировании компонента

  return (
    <div>
      {trendingMovies.length > 0 ? (
        <MovieList trendingMovies={trendingMovies} />
      ) : (
        <p>No movies found.</p> // Показываем сообщение, если нет фильмов
      )}
    </div>
  );
}
