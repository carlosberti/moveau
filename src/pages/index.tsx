import { getHomeMovies } from 'client'
import HomeTemplate, { HomeTemplateProps } from 'templates/Home'

export default function Home(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />
}

export const getStaticProps = async () => {
  const movies = await getHomeMovies()

  return {
    revalidate: 21600,
    props: {
      movies: movies.map((movie) => ({
        img: `https://image.tmdb.org/t/p/w300/${movie.poster_path}`,
        name: movie.original_title
      }))
    }
  }
}
