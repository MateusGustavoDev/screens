"use client";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

async function getMovieInfoById(id: number): Promise<any | undefined> {
  try {
    const response = await api(`/movie/${id}?language=en-US`);
    const movieInfo = await response.data;
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
