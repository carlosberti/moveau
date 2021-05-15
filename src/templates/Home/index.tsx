import { ChangeEvent, useEffect, useRef, useState } from 'react'
import slugify from 'slugify'

import Base from 'templates/Base'
import { Container } from 'components/Container'
import { MovieCardProps } from 'components/MovieCard'
import MovieCardsGrid from 'components/MovieCardsGrid'
import MoviePopup from 'components/MoviePopup'
import { getHomeMovies, getSearchMovies } from 'client'
import { homeMoviesMapper } from 'utils/mappers'
import * as s from './styles'

export type HomeTemplateProps = {
  movies: MovieCardProps[]
}

const Home = ({ movies }: HomeTemplateProps) => {
  const [page, setPage] = useState(2)
  const [moviesToShow, setMoviesToShow] = useState<MovieCardProps[]>(movies)
  const [search, setSearch] = useState<string | undefined>(undefined)
  const [totalPages, setTotalPages] = useState<number | undefined>(undefined)
  const timer = useRef<NodeJS.Timeout | undefined>()
  const loader = useRef(null)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '50px',
      threshold: 1
    }
    const observer = new IntersectionObserver(handleObserver, options)
    if (loader.current) {
      observer.observe(loader.current!)
    }
  }, [])

  const moviesToGet = async () =>
    search
      ? page <= totalPages! &&
        (await getSearchMovies({ query: slugify(search), page: page })).results
      : await getHomeMovies({ page })

  useEffect(() => {
    let isMounted = true
    async function getMoreMovies() {
      try {
        const movies = await moviesToGet()
        const newMovies = movies ? homeMoviesMapper(movies) : []
        if (isMounted)
          setMoviesToShow((moviesToShow) => [...moviesToShow, ...newMovies])
      } catch (error) {
        console.log(error)
      }
    }

    getMoreMovies()

    return () => {
      isMounted = false
    }
  }, [page])

  const handleObserver = (entities: IntersectionObserverEntry[]) => {
    const target = entities[0]
    if (target.isIntersecting) {
      setPage((page) => page + 1)
    }
  }

  const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget

    clearTimeout(timer.current as NodeJS.Timeout)

    timer.current = setTimeout(async () => {
      if (value !== '') {
        const response = await getSearchMovies({
          query: slugify(value),
          page: 1
        })
        setSearch(value)
        setPage(2)
        setMoviesToShow(homeMoviesMapper(response.results))
        setTotalPages(response.total_pages)
        return
      }
      setSearch(undefined)
      setTotalPages(undefined)
      setPage(2)
      setMoviesToShow(movies)
    }, 1000)
  }

  const loadingSpinner = () =>
    (!totalPages || page <= totalPages) && (
      <s.LoadingSpinner role="img" ref={loader} aria-label="Loading more" />
    )

  return (
    <Base>
      <MoviePopup />
      <Container>
        <s.Input
          placeholder="Search for movies"
          onChange={handleInputChange}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
        />
        <s.MovieCards>
          <MovieCardsGrid movies={moviesToShow} />
          {loadingSpinner()}
        </s.MovieCards>
      </Container>
    </Base>
  )
}

export default Home
