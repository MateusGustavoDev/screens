'use client'
import { useTrendingMovies } from '@/hooks/useTrendingMovies'
import { getGenreById } from '@/utils/movie-genre-by-id'
import { PlayNowButton, WatchListButton } from '.'
import styles from '@/app/styles/gradient.module.css'

export function RecommendedMovies() {
  const { data } = useTrendingMovies()

  let releaseYear = ''

  if (data) {
    releaseYear = data[0].release_date

    releaseYear = new Date(releaseYear).getFullYear().toString()
  }

  return (
    <div className="m-auto max-w-[1500px] bg-slate-500  max-md:h-max">
      {data ? (
        <div className="relative">
          <div
            className={`${styles.gradient} hidden h-full w-full max-sm:block`}
          >
            <div className="hidden h-full w-full bg-black/10" />
          </div>
          <div
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${data[0].backdrop_path})`,
            }}
            className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat max-sm:flex max-sm:px-5 max-sm:py-5 sm:aspect-[1600/800]"
          >
            <div className={`${styles.gradient} h-full w-1/2 max-md:hidden`} />
            <div className="z-40 flex w-[480px] flex-col py-6 max-sm:relative sm:absolute sm:left-10 sm:top-1/2 sm:-translate-y-1/2">
              <span className="font-poppins text-3xl font-semibold text-white max-sm:text-xl">
                {data[0].title}
              </span>
              <div className="mt-6 flex flex-col gap-3 max-sm:mt-3">
                <div className="flex gap-2">
                  {data[0].genre_ids.map((id) => (
                    <span
                      className="font-poppins text-xl font-semibold text-white max-sm:text-sm"
                      key={id}
                    >
                      {getGenreById(id)},
                    </span>
                  ))}

                  <span className="font-poppins text-xl font-semibold text-white max-sm:text-sm">
                    {releaseYear}
                  </span>
                </div>
                <span className="line-clamp-4 w-[460px] font-poppins text-sm leading-7 text-zinc-300 max-lg:hidden">
                  {data[0].overview}
                </span>
              </div>
              <div className="mt-11 flex gap-5 max-sm:mt-6 max-sm:flex-col max-sm:gap-3">
                <PlayNowButton id={data[0].id} />
                <WatchListButton />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="aspect-[1600/800] bg-zinc-900"></div>
      )}
    </div>
  )
}
