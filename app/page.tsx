"use client";
import { useSession } from "next-auth/react";
import {
  Banner,
  MovieCard,
  MovieRecommended,
  MovieCarousel,
} from "@/components/ui";
import { useUpcomingMovies } from "@/hooks/useUpcomingMovies";
import { usePopularMovies } from "@/hooks/usePopularMovies";
import { useTrendingMovies } from "@/hooks/useTrendingMovies";
import { CarouselSkeleton } from "@/components/ui/skeletons/MovieCardSkeleton";
import { MovieRecommendedSkeleton } from "@/components/ui/skeletons/recommended-movie-skeleton";

export default function Home() {
  const { data: session } = useSession();
  const { data: popularMovies, isLoading: IsLoadingPopularMovies } =
    usePopularMovies();
  const { data: upcomingMovies, isLoading: IsLoadingUpcomingMovies } =
    useUpcomingMovies();
  const { data: trendingMovies, isLoading: IsLoadingTrendingMovies } =
    useTrendingMovies();

  return (
    <div>
      {session ? (
        <>
          {IsLoadingPopularMovies ? (
            <MovieRecommendedSkeleton />
          ) : (
            <MovieRecommended />
          )}
        </>
      ) : (
        <Banner />
      )}

      {IsLoadingTrendingMovies ? (
        <CarouselSkeleton />
      ) : (
        <MovieCarousel text="Trending">
          {trendingMovies?.map((movie) => (
            <MovieCard
              key={movie.id}
              name={movie.title}
              movieImage={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${movie.poster_path}`}
            />
          ))}
        </MovieCarousel>
      )}

      {IsLoadingPopularMovies ? (
        <CarouselSkeleton horizontal />
      ) : (
        <MovieCarousel text="Most popular">
          {popularMovies?.map((movie) => (
            <MovieCard
              key={movie.id}
              name={movie.title}
              movieImage={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${movie.backdrop_path}`}
              horizontal
            />
          ))}
        </MovieCarousel>
      )}

      {IsLoadingUpcomingMovies ? (
        <CarouselSkeleton />
      ) : (
        <MovieCarousel text="Upcoming">
          {upcomingMovies?.map((movie) => (
            <MovieCard
              key={movie.id}
              name={movie.title}
              movieImage={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${movie.poster_path}`}
            />
          ))}
        </MovieCarousel>
      )}
    </div>
  );
}
