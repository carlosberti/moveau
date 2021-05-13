import axios from 'axios'

const BASE_MOVIE_URL = 'https://api.themoviedb.org/3/movie'

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
  id: string
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
  id: string
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
  id: string
}

type MovieDetails = {
  title: string
  overview: string
}

type Images = {
  backdrops: {
    path: string
  }[]
}

type ImagesResponse = {
  [path: string]: string
}

export type MovieDetailsResponse = MovieDetails & {
  images: ImagesResponse[]
  videos: VideosResponse[]
}

export const getMovieDetails = async ({
  id
}: MovieDetailsProps): Promise<MovieDetailsResponse | undefined> => {
  const [details, images, videos] = await Promise.allSettled([
    axios.get<MovieDetails>(`${BASE_MOVIE_URL}/${id}`, config),
    axios.get<Images>(`${BASE_MOVIE_URL}/${id}/images`, config),
    axios.get<VideosData>(`${BASE_MOVIE_URL}/${id}/videos`, config)
  ])

  if (details.status === 'rejected') {
    return undefined
  }

  const movieDetails = details.value.data
  const movieImages =
    images.status === 'fulfilled' ? images.value.data.backdrops : []
  const movieVideos =
    videos.status === 'fulfilled' ? videos.value.data.results : []

  const movie = {
    ...movieDetails,
    images: [...movieImages],
    videos: [...movieVideos]
  }

  return movie
}
