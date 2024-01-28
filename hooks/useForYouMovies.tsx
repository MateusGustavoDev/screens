"use client";
import { useQuery } from "@tanstack/react-query";

interface forYouMovies {
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

async function getForYouMovies(): Promise<forYouMovies[] | undefined> {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.NEXT_PUBLIC_TMDB_API_ACCESS_TOKEN,
    },
  };

  try {
    const data = await fetch(url, options);
    const discoverMovies = await data.json();
    return discoverMovies.results;
  } catch (error) {
    console.error("error: " + error);
  }
}

export function useForYouMovies() {
  return useQuery({ queryKey: ["for-you-movies"], queryFn: getForYouMovies });
}
