import axios from "axios";

export async function getTrendingMovie() {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day",
    {
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGI3Y2Y3NjhmOWVmNTU2ZWRiYWRkNzAxOGEwZWRkNyIsIm5iZiI6MTcyNTU2OTA5Ni4zMTI4NzYsInN1YiI6IjY2ZDhiNDc3ZGVlOTJhNWRmMjM5Njg4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lt3wNkuOjp47XdMmUAG2ZOfpThNF2ijJvYKAhp8V07I",
      },
    }
  );
  return response.data;
}

export function searchMovie(query) {
  return axios.get("https://api.themoviedb.org/3/search/movie", {
    params: { language: "en-US", query },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGI3Y2Y3NjhmOWVmNTU2ZWRiYWRkNzAxOGEwZWRkNyIsIm5iZiI6MTcyNTU2OTA5Ni4zMTI4NzYsInN1YiI6IjY2ZDhiNDc3ZGVlOTJhNWRmMjM5Njg4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lt3wNkuOjp47XdMmUAG2ZOfpThNF2ijJvYKAhp8V07I",
    },
  });
}

export async function getMovieDetail(movieId) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    {
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGI3Y2Y3NjhmOWVmNTU2ZWRiYWRkNzAxOGEwZWRkNyIsIm5iZiI6MTcyNTU2OTA5Ni4zMTI4NzYsInN1YiI6IjY2ZDhiNDc3ZGVlOTJhNWRmMjM5Njg4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lt3wNkuOjp47XdMmUAG2ZOfpThNF2ijJvYKAhp8V07I",
      },
    }
  );
  return response.data;
}

export async function getMovieCast(movieId) {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    {
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGI3Y2Y3NjhmOWVmNTU2ZWRiYWRkNzAxOGEwZWRkNyIsIm5iZiI6MTcyNTU2OTA5Ni4zMTI4NzYsInN1YiI6IjY2ZDhiNDc3ZGVlOTJhNWRmMjM5Njg4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lt3wNkuOjp47XdMmUAG2ZOfpThNF2ijJvYKAhp8V07I",
      },
    }
  );
}

export async function getReviews(movieId) {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    {
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGI3Y2Y3NjhmOWVmNTU2ZWRiYWRkNzAxOGEwZWRkNyIsIm5iZiI6MTcyNTU2OTA5Ni4zMTI4NzYsInN1YiI6IjY2ZDhiNDc3ZGVlOTJhNWRmMjM5Njg4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lt3wNkuOjp47XdMmUAG2ZOfpThNF2ijJvYKAhp8V07I",
      },
    }
  );
}
