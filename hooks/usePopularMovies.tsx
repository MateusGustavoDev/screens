import { useQuery } from "@tanstack/react-query";

export interface PopularMovies {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

async function getPopularMovies(): Promise<PopularMovies[] | undefined> {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.NEXT_PUBLIC_TMDB_API_ACCESS_TOKEN,
    },
  };

  try {
    const data = await fetch(url, options);
    const popularMovies = await data.json();
    return popularMovies.results;
  } catch (error) {
    console.error("error: " + error);
  }
}

export function usePopularMovies() {
  return useQuery({ queryKey: ["popular-movies"], queryFn: getPopularMovies });
}
