"use client";
import { useQuery } from "@tanstack/react-query";

async function getMovieInfoById(id: number): Promise<any | undefined> {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.NEXT_PUBLIC_TMDB_API_ACCESS_TOKEN,
    },
  };

  try {
    const data = await fetch(url, options);
    const movieInfo = await data.json();
    return movieInfo;
  } catch (error) {
    console.error("error: " + error);
  }
}

export function useMovieInfoById(id: number) {
  return useQuery({
    queryKey: ["movie-info-by-id"],
    queryFn: () => getMovieInfoById(id),
  });
}
