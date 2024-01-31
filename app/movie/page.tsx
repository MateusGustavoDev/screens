"use client";
import { MovieCard, MovieCarousel } from "@/components/ui";
import { MoviesForYou } from "./components/movies-for-you";
import { MoviePlayer } from "./components/movie-player";
import { usePopularMovies } from "@/hooks/usePopularMovies";
import { useMovieInfoById } from "@/hooks/useMovieInfoById";
import { useQuery } from "@tanstack/react-query";
import { MoviePlayerSkeleton } from "./components/skeletons/movie-player-skeleton";
import { ForYouMovieSkeleton } from "./components/skeletons/for-you-movie-skeleton";
import { CarouselSkeleton } from "@/components/ui/skeletons/movie-carousel-skeleton";

interface SearchParamsProps {
  searchParams: {
    id: number;
  };
}

export default function Page({ searchParams }: SearchParamsProps) {
  const { data } = usePopularMovies();
  const { data: movieInfo, isLoading: movieInfoIsLoading } = useMovieInfoById(
    searchParams.id,
  );

  async function getMovieTrailer() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: process.env.NEXT_PUBLIC_TMDB_API_ACCESS_TOKEN,
      },
    };
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${searchParams.id}/videos?language=en-US`,
      options,
    );
    const data = await response.json();
    return data.results;
  }

  const { data: movieTrailer } = useQuery({
    queryKey: ["movie-trailer"],
    queryFn: getMovieTrailer,
  });

  return (
    <div>
      <div className="flex gap-6 ">
        {movieInfoIsLoading ? (
          <>
            <MoviePlayerSkeleton />
            <ForYouMovieSkeleton />
          </>
        ) : (
          <>
            {movieInfo && (
              <>
                <MoviePlayer
                  id={movieInfo.id}
                  name={movieInfo.title}
                  overview={movieInfo.overview}
                  productionCompanies={movieInfo.production_companies[0].name}
                  releaseDate={movieInfo.release_date}
                  runtime={movieInfo.runtime}
                  youtubeKey={movieTrailer[0].key}
                />
                <div className="max-2xl:hidden">
                  <MoviesForYou />
                </div>
              </>
            )}
          </>
        )}
      </div>

      {movieInfoIsLoading ? (
        <CarouselSkeleton horizontal />
      ) : (
        <div className="max-md:mt-4">
          <MovieCarousel text="Related Videos">
            {data?.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                name={movie.title}
                horizontal
                movieImage={movie.backdrop_path}
              />
            ))}
          </MovieCarousel>
        </div>
      )}
    </div>
  );
}
