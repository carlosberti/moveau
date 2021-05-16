import axios from 'axios'

export const BASE_MOVIE_URL = 'https://api.themoviedb.org/3/movie'
export const BASE_SEARCH_URL = 'https://api.themoviedb.org/3/search/movie'

const config = {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    'Content-Type': 'application/json;charset=utf-8'
  }
}

type HomeMoviesProps = {
  page: number
}

export type HomeMoviesResponse = {
  id: number
  title: string
  poster_path: string
  overview: string
}

type HomeMoviesData = {
  results: HomeMoviesResponse[]
}

export const getHomeMovies = async ({
  page
}: HomeMoviesProps): Promise<HomeMoviesResponse[]> => {
  const response = await axios.get<HomeMoviesData>(
    `${BASE_MOVIE_URL}/popular`,
    {
      ...config,
      params: {
        page,
        lang: 'en-US'
      }
    }
  )

  return response.data.results
}

type VideosProps = {
  id: number
}

type VideosResponse = {
  key: string
  site: string
  type: string
}

type VideosData = {
  results: VideosResponse[]
}

export const getVideos = async ({
  id
}: VideosProps): Promise<VideosResponse[]> => {
  const response = await axios.get<VideosData>(
    `${BASE_MOVIE_URL}/${id}/videos`,
    config
  )

  return response.data.results
}

type MovieDetailsProps = {
  id: number
}

type MovieDetails = {
  title: string
  overview: string
  poster_path: string
  production_companies: {
    name: string
  }[]
}

type Images = {
  backdrops: {
    path: string
  }[]
}

type Options = {
  buy: {
    provider_name: string
  }[]
  rent: {
    provider_name: string
  }[]
  flatrate: {
    provider_name: string
  }[]
}

type Language = {
  SE: Options
}

type WatchProvider = {
  results: Language
}

type ImagesResponse = {
  [path: string]: string
}

export type MovieDetailsResponse = MovieDetails & {
  images: ImagesResponse[]
  videos: VideosResponse[]
  watchProviders: string[]
}

export const getMovieDetails = async ({
  id
}: MovieDetailsProps): Promise<MovieDetailsResponse | undefined> => {
  const [details, images, videos, watchProviders] = await Promise.allSettled([
    axios.get<MovieDetails>(`${BASE_MOVIE_URL}/${id}`, config),
    axios.get<Images>(`${BASE_MOVIE_URL}/${id}/images`, config),
    axios.get<VideosData>(`${BASE_MOVIE_URL}/${id}/videos`, config),
    axios.get<WatchProvider>(`${BASE_MOVIE_URL}/${id}/watch/providers`, config)
  ])

  if (details.status === 'rejected') {
    return undefined
  }

  const movieDetails = details.value.data
  const movieImages =
    images.status === 'fulfilled' ? images.value.data.backdrops : []
  const movieVideos =
    videos.status === 'fulfilled' ? videos.value.data.results : []
  const movieWatchProviders =
    watchProviders.status === 'fulfilled'
      ? watchProviders.value.data.results.SE?.buy
        ? watchProviders.value.data.results.SE.buy
        : watchProviders.value.data.results.SE?.rent
        ? watchProviders.value.data.results.SE.rent
        : watchProviders.value.data.results.SE?.flatrate
        ? watchProviders.value.data.results.SE.flatrate
        : []
      : []

  const movie = {
    ...movieDetails,
    images: [...movieImages],
    videos: [...movieVideos],
    watchProviders: movieWatchProviders
      ? movieWatchProviders.map((provider) => provider.provider_name)
      : []
  }

  return movie
}

type SearchMoviesProps = {
  query: string
  page: number
}

export type SearchMoviesResponse = {
  id: number
  title: string
  poster_path: string
  overview: string
}

type SearchMoviesData = {
  results: SearchMoviesResponse[]
  total_pages: number
}

export const getSearchMovies = async ({
  query,
  page
}: SearchMoviesProps): Promise<SearchMoviesData> => {
  const response = await axios.get<SearchMoviesData>(`${BASE_SEARCH_URL}`, {
    ...config,
    params: {
      query,
      page,
      lang: 'en-US'
    }
  })

  return response.data
}
