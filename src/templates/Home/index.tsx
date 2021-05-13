import Base from 'templates/Base'
import { Container } from 'components/Container'
import { MovieCardProps } from 'components/MovieCard'
import MovieCardsGrid from 'components/MovieCardsGrid'
import MoviePopup from 'components/MoviePopup'
import * as s from './styles'
import { useEffect, useRef, useState } from 'react'
import { getHomeMovies } from 'client'
import { homeMoviesMapper } from 'utils/mappers'

export type HomeTemplateProps = {
  movies: MovieCardProps[]
}

const Home = ({ movies }: HomeTemplateProps) => {
  const [page, setPage] = useState(1)
  const [homeMovies, setHomeMovies] = useState(movies)
  const loader = useRef(null)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '50px',
      threshold: 0.5
    }
    const observer = new IntersectionObserver(handleObserver, options)
    if (loader.current) {
      observer.observe(loader.current!)
    }
  }, [])

  useEffect(() => {
    async function getMoreMovies() {
      try {
        const movies = await getHomeMovies({ page })
        const newMovies = homeMoviesMapper(movies)
        setHomeMovies((homeMovies) => [...homeMovies, ...newMovies])
      } catch (error) {
        console.log(error)
      }
    }

    getMoreMovies()
  }, [page])

  const handleObserver = (entities: IntersectionObserverEntry[]) => {
    const target = entities[0]
    if (target.isIntersecting) {
      setPage((page) => page + 1)
    }
  }

  return (
    <Base>
      <MoviePopup />
      <Container>
        <s.MovieCards>
          <MovieCardsGrid movies={homeMovies} />
          <s.LoadingSpinner ref={loader} />
        </s.MovieCards>
      </Container>
    </Base>
  )
}

export default Home
