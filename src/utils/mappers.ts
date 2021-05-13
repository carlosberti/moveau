import { HomeMoviesResponse, MovieDetailsResponse } from 'client'

export const homeMoviesMapper = (movies: HomeMoviesResponse[]) =>
  movies.map((movie) => ({
    id: movie.id,
    img: `https://image.tmdb.org/t/p/w300/${movie.poster_path}`,
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
  videos: movie.videos
})
