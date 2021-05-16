import { ChangeEvent, useRef, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import slugify from 'slugify'

import Base from 'templates/Base'
import { Container } from 'components/Container'
import { MovieCardProps } from 'components/MovieCard'
import MovieCardsGrid from 'components/MovieCardsGrid'
import { getHomeMovies, getSearchMovies } from 'client'
import { homeMoviesMapper } from 'utils/mappers'
import * as s from './styles'

export type HomeTemplateProps = {
  movies: MovieCardProps[]
  pageSize: number
}

const Home = ({ movies, pageSize }: HomeTemplateProps) => {
  const [moviesToShow, setMoviesToShow] = useState<MovieCardProps[]>(movies)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState<number>(pageSize)
  const [search, setSearch] = useState<string | undefined>(undefined)
  const timer = useRef<NodeJS.Timeout | undefined>()

  const moviesToGet = async (page: number) =>
    search
      ? (await getSearchMovies({ query: slugify(search), page })).results
      : (await getHomeMovies({ page })).results

  const getMoreMovies = async () => {
    const nextPage = page + 1
    const movies = await moviesToGet(nextPage)
    const newMovies = movies ? homeMoviesMapper(movies) : []
    setMoviesToShow((moviesToShow) => [...moviesToShow, ...newMovies])
    setPage(nextPage)
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
      setTotalPages(pageSize)
      setPage(1)
      setMoviesToShow(movies)
    }, 1000)
  }

  return (
    <Base>
      <Container>
        <s.Input
          placeholder="Search for movies"
          onChange={handleInputChange}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
        />
        <s.MovieCards>
          <InfiniteScroll
            pageStart={0}
            loadMore={getMoreMovies}
            hasMore={page < totalPages}
            loader={<s.LoadingSpinner />}
            useWindow={true}
            threshold={50}
          >
            <MovieCardsGrid movies={moviesToShow} />
          </InfiniteScroll>
        </s.MovieCards>
      </Container>
    </Base>
  )
}

export default Home
