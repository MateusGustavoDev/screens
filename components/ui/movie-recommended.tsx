"use client";
import { useTrendingMovies } from "@/hooks/useTrendingMovies";
import { getGenreById } from "@/utils/movie-genre-by-id";
import { PlayNowButton, WatchListButton } from ".";
import styles from "@/app/gradient.module.css";

export function MovieRecommended() {
  const { data } = useTrendingMovies();

  let releaseYear = "";

  if (data) {
    releaseYear = data[0].release_date;

    releaseYear = new Date(releaseYear).getFullYear().toString();
  }

  return (
    <div className="m-auto max-w-[1500px] bg-slate-500">
      {data ? (
        <div className="relative">
          <div
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${data[0].backdrop_path})`,
            }}
            className="aspect-[1600/800] overflow-hidden bg-cover bg-center bg-no-repeat"
          >
            <div className={styles.gradient} />
            <div className="absolute left-10 top-1/2 z-50 flex max-w-[480px] -translate-y-1/2 flex-col">
              <span className="font-poppins text-3xl font-semibold text-white">
                {data[0].title}
              </span>
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex gap-2">
                  {data[0].genre_ids.map((id) => (
                    <span
                      className="font-poppins text-xl font-semibold text-white"
                      key={id}
                    >
                      {getGenreById(id)},
                    </span>
                  ))}

                  <span className="font-poppins text-xl font-semibold text-white">
                    {releaseYear}
                  </span>
                </div>
                <span className="font-poppins text-sm leading-7 text-zinc-300">
                  {data[0].overview}
                </span>
              </div>
              <div className="mt-11 flex gap-5">
                <PlayNowButton />
                <WatchListButton />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="aspect-[1600/800] bg-zinc-900"></div>
      )}
    </div>
  );
}
