'use client'
import { MovieCard, MovieCarousel } from '@/components/ui'
import { MoviesForYou } from './components/movies-for-you'
import { MoviePlayer } from './components/movie-player'
import { usePopularMovies } from '@/hooks/usePopularMovies'
import { useMovieInfoById } from '@/hooks/useMovieInfoById'
import { useQuery } from '@tanstack/react-query'
import { MoviePlayerSkeleton } from './components/skeletons/movie-player-skeleton'
import { ForYouMovieSkeleton } from './components/skeletons/for-you-movie-skeleton'
import { CarouselSkeleton } from '@/components/ui/skeletons/movie-carousel-skeleton'
import { api } from '@/lib/axios'
import { useEffect, useState } from 'react'

interface SearchParamsProps {
  searchParams: {
    id: number
  }
}

type MovieInfo = {
  iso_639_1: string
  iso_3166_1: string
  name: string
  key: string
  site: string
  size: number
  type: string
  official: boolean
  published_at: string
  id: string
}

async function getMovieTrailer(paramsId: number): Promise<MovieInfo[]> {
  const response = await api(`/movie/${paramsId}/videos?language=en-US`)

  const data = await response.data
  return data.results
}

export default function Page({ searchParams }: SearchParamsProps) {
  const [trailer, setTrailer] = useState('')
  const { data, refetch: popularMoviesRefetch } = usePopularMovies()
  const {
    data: movieInfo,
    isLoading: movieInfoIsLoading,
    refetch: movieInfoRefetch,
  } = useMovieInfoById(searchParams.id)

  const { data: movieTrailer, refetch: movieTrailerRefetch } = useQuery({
    queryKey: ['movie-trailer'],
    queryFn: () => getMovieTrailer(searchParams.id),
  })

  useEffect(() => {
    const filterByVideoOfTypeTrailer = movieTrailer?.find(
      (movie) => movie.type === 'Trailer',
    )

    if (filterByVideoOfTypeTrailer) {
      setTrailer(filterByVideoOfTypeTrailer.key)
    }
  }, [movieTrailer])

  useEffect(() => {
    popularMoviesRefetch()
    movieInfoRefetch()
    movieTrailerRefetch()
  }, [
    searchParams.id,
    popularMoviesRefetch,
    movieTrailerRefetch,
    movieInfoRefetch,
  ])

  return (
    <div>
      <div className="flex gap-6 ">
        {movieInfoIsLoading ? (
          <>
            <MoviePlayerSkeleton />
            <div className="max-2xl:hidden">
              <ForYouMovieSkeleton />
            </div>
          </>
        ) : (
          <>
            {movieInfo && movieTrailer && (
              <>
                <MoviePlayer
                  id={movieInfo.id}
                  name={movieInfo.title}
                  overview={movieInfo.overview}
                  productionCompanies={movieInfo.production_companies[0].name}
                  releaseDate={movieInfo.release_date}
                  runtime={movieInfo.runtime}
                  youtubeKey={trailer}
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
  )
}
