'use client'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

type TrendingMovies = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  media_type: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

async function getTrendingMovies(): Promise<TrendingMovies[]> {
  try {
    const response = await api('/trending/movie/day?language=en-US')
    const trendingMovies = await response.data
    return trendingMovies.results
  } catch (error) {
    throw error
  }
}

export function useTrendingMovies() {
  return useQuery({
    queryKey: ['trending-movies'],
    queryFn: getTrendingMovies,
  })
}
