import { HomeMoviesResponse } from 'client'

export const homeMoviesMapper = (movies: HomeMoviesResponse[]) =>
  movies.map((movie) => ({
    id: movie.id,
    img: `https://image.tmdb.org/t/p/w300/${movie.poster_path}`,
    name: movie.original_title,
    overview: movie.overview
  }))
