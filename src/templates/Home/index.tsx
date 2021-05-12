import Base from 'templates/Base'
import { Container } from 'components/Container'
import { MovieCardProps } from 'components/MovieCard'
import MovieCardsGrid from 'components/MovieCardsGrid'
import MoviePopup from 'components/MoviePopup'
import { useMovieStore } from 'store'
import * as s from './styles'

export type HomeTemplateProps = {
  movies: MovieCardProps[]
}

const Home = ({ movies }: HomeTemplateProps) => {
  const movie = useMovieStore((state) => state.movie)

  return (
    <Base>
      {movie && <MoviePopup {...movie} />}
      <Container>
        <s.MovieCards>
          <MovieCardsGrid movies={movies} />
        </s.MovieCards>
      </Container>
    </Base>
  )
}

export default Home
