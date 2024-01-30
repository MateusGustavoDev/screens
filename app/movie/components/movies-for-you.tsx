"use client";
import { MovieCard } from "@/components/ui";
import { useTrendingMovies } from "@/hooks/useTrendingMovies";

export function MoviesForYou() {
  const { data } = useTrendingMovies();
  return (
    <div className="flex flex-col gap-8">
      <span className="font-poppins text-2xl font-semibold text-white">
        Movies for you
      </span>
      <div className="grid grid-cols-2 gap-4">
        {data
          ?.slice(0, 6)
          .map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              name={movie.title}
              movieImage={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${movie.poster_path}`}
            />
          ))}
      </div>
    </div>
  );
}
