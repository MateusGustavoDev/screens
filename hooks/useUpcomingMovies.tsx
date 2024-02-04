'use client'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

interface UpcomingMovies {
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

async function getUpcomingMovies(): Promise<UpcomingMovies[]> {
  try {
    const response = await api('/movie/upcoming?language=en-US&page=1')
    const upcomingMovies = await response.data
    return upcomingMovies.results
  } catch (error) {
    throw error
  }
}

export function useUpcomingMovies() {
  return useQuery({
    queryKey: ['upcoming-movies'],
    queryFn: getUpcomingMovies,
  })
}
