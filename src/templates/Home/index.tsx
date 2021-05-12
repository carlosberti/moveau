import { Container } from 'components/Container'
import { MovieCardProps } from 'components/MovieCard'
import MovieCardsGrid from 'components/MovieCardsGrid'
import Base from 'templates/Base'
import * as s from './styles'

export type HomeTemplateProps = {
  movies: MovieCardProps[]
}

const Home = ({ movies }: HomeTemplateProps) => (
  <Base>
    <Container>
      <s.MovieCards>
        <MovieCardsGrid movies={movies} />
      </s.MovieCards>
    </Container>
  </Base>
)

export default Home
