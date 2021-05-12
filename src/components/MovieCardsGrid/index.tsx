import MovieCard, { MovieCardProps } from 'components/MovieCard'
import * as s from './styles'

export type MovieCardsGridProps = {
  movies: MovieCardProps[]
}

const MovieCardsGrid = ({ movies }: MovieCardsGridProps) => (
  <s.Wrapper>
    {movies.map((movie, index) => (
      <MovieCard key={`${movie.img} - ${index}`} {...movie} />
    ))}
  </s.Wrapper>
)
export default MovieCardsGrid
