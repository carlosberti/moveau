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
