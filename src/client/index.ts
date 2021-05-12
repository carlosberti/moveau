import axios from 'axios'

const BASE_MOVIE_URL = 'https://api.themoviedb.org/3/movie'

const config = {
  headers: {
    Authorization: `Bearer ${process.env.TOKEN}`,
    'Content-Type': 'application/json;charset=utf-8'
  }
}

type HomeMoviesResponse = {
  id: string
  original_title: string
  poster_path: string
}

export const getHomeMovies = async (): Promise<HomeMoviesResponse[]> => {
  const response = await axios.get(`${BASE_MOVIE_URL}/popular`, config)

  return response.data.results
}
