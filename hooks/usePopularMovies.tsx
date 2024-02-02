import { api } from "@/lib/axios";
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
  try {
    const response = await api("/movie/popular?language=en-US&page=1");
    const popularMovies = await response.data;
    return popularMovies.results;
  } catch (error) {
    console.error("error: " + error);
  }
}

export function usePopularMovies() {
  return useQuery({ queryKey: ["popular-movies"], queryFn: getPopularMovies });
}
