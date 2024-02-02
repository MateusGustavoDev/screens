import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 1000,
  headers: {
    accept: 'application/json',
    Authorization: process.env.NEXT_PUBLIC_TMDB_API_ACCESS_TOKEN,
  },
})
