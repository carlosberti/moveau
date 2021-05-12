import MovieCard, { MovieCardProps } from 'components/MovieCard'
import * as s from './styles'

export type MovieCardsCarouselProps = {
  movies: MovieCardProps[]
}

const MovieCardsCarousel = ({ movies }: MovieCardsCarouselProps) => (
  <s.Wrapper>
    {movies.map((movie, index) => (
      <MovieCard key={`${movie.img} - ${index}`} {...movie} />
    ))}
  </s.Wrapper>
)
export default MovieCardsCarousel
