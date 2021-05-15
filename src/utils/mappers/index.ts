import { HomeMoviesResponse, MovieDetailsResponse } from 'client'

export const homeMoviesMapper = (movies: HomeMoviesResponse[]) =>
  movies.map((movie) => ({
    id: movie.id,
    img: movie.poster_path
      ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
      : '/assets/img/not-found.jpg',
    name: movie.title,
    overview: movie.overview
  }))

type MovieDetailsMapperProps = {
  movie: MovieDetailsResponse
  id: string
}

export const movieDetailsMapper = ({ id, movie }: MovieDetailsMapperProps) => ({
  id: id,
  name: movie.title,
  overview: movie.overview,
  images: movie.images,
  videos: movie.videos,
  watchProviders: movie.watchProviders,
  companies: movie.production_companies.map((company) => company.name)
})
