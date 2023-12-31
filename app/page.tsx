"use client";
import LiveShowCard from "@/components/ui/live-show-card";
import Banner from "@/components/ui/banner";
import CategorySection from "@/components/ui/category-section";
import MovieCard from "@/components/ui/movie-card";
import MovieCarousel from "@/components/ui/movie-carousel";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      {session ? <MovieCarousel /> : <Banner />}
      <CategorySection text="Live Show">
        <LiveShowCard />
        <LiveShowCard />
        <LiveShowCard />
        <LiveShowCard />
      </CategorySection>
      <CategorySection text="Most Popular">
        <MovieCard movieImage="/movie.png" />
        <MovieCard movieImage="/movie.png" />
        <MovieCard movieImage="/movie.png" />
        <MovieCard movieImage="/movie.png" />
        <MovieCard movieImage="/movie.png" />
        <MovieCard movieImage="/movie.png" />
        <MovieCard movieImage="/movie.png" />
      </CategorySection>
      <CategorySection text="Movies For You">
        <MovieCard movieImage="/movie-2.png" horizontal />
        <MovieCard movieImage="/movie-2.png" horizontal />
        <MovieCard movieImage="/movie-2.png" horizontal />
        <MovieCard movieImage="/movie-2.png" horizontal />
      </CategorySection>
      <CategorySection text="Latest Movies">
        <MovieCard movieImage="/movie-3.png" horizontal />
        <MovieCard movieImage="/movie-3.png" horizontal />
        <MovieCard movieImage="/movie-3.png" horizontal />
        <MovieCard movieImage="/movie-3.png" horizontal />
      </CategorySection>
    </>
  );
}
