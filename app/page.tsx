import LiveShowCard from "./components/LiveShowCard";
import Banner from "./components/Banner";
import CategorySection from "./components/CategorySection";
import MovieCard from "./components/MovieCard";

export default function Home() {
  return (
    <>
      <Banner />
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
