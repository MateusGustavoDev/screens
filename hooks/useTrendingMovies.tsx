"use client";
import { useQuery } from "@tanstack/react-query";

type TrendingMovies = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
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
};

async function getTrendingMovies(): Promise<TrendingMovies[] | undefined> {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.NEXT_PUBLIC_TMDB_API_ACCESS_TOKEN,
    },
  };

  try {
    const data = await fetch(url, options);
    const trendingMovies = await data.json();
    return trendingMovies.results;
  } catch (error) {
    console.error("error: " + error);
  }
}

export function useTrendingMovies() {
  return useQuery({
    queryKey: ["trending-movies"],
    queryFn: getTrendingMovies,
  });
}
