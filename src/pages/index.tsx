import { getHomeMovies } from 'client'
import HomeTemplate, { HomeTemplateProps } from 'templates/Home'
import { homeMoviesMapper } from 'utils/mappers'

export default function Home(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />
}

export const getStaticProps = async () => {
  const movies = await getHomeMovies({ page: 1 })

  return {
    revalidate: 21600,
    props: {
      movies: homeMoviesMapper(movies)
    }
  }
}
