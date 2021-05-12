import Base from 'templates/Base'
import { Container } from 'components/Container'
import { MovieCardProps } from 'components/MovieCard'
import MovieCardsGrid from 'components/MovieCardsGrid'
import MoviePopup from 'components/MoviePopup'
import * as s from './styles'

export type HomeTemplateProps = {
  movies: MovieCardProps[]
}

const Home = ({ movies }: HomeTemplateProps) => {
  return (
    <Base>
      <MoviePopup />
      <Container>
        <s.MovieCards>
          <MovieCardsGrid movies={movies} />
        </s.MovieCards>
      </Container>
    </Base>
  )
}

export default Home
