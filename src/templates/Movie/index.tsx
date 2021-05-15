import BannerSlider from 'components/BannerSlider'
import { Container } from 'components/Container'
import MovieInfos from 'components/MovieInfos'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import slugify from 'slugify'
import Base from 'templates/Base'
import * as s from './styles'

type ImagesResponse = {
  file_path: string
}

type VideosResponse = {
  key: string
  site: string
  type: string
}

export type MovieTemplateProps = {
  id: string
  name: string
  overview: string
  images: ImagesResponse[]
  videos: VideosResponse[]
  watchProviders: string[]
  companies: string[]
}

const Movie = ({
  id,
  name,
  overview,
  videos,
  images,
  watchProviders,
  companies
}: MovieTemplateProps) => {
  const router = useRouter()

  useEffect(() => {
    if (name) {
      const movieSlug = slugify(name)

      if (!router.pathname.includes(movieSlug)) {
        router.push(`/${id}/${movieSlug}`, undefined, { shallow: true })
      }
    }
  }, [router.isFallback])

  if (router.isFallback) {
    return <div>loading...</div>
  }

  const concatImagesAndVideos = () => {
    const video = videos.flatMap((video) =>
      video.site === 'YouTube' ? [video.key] : []
    )
    const image = images.map(
      (image) => `https://image.tmdb.org/t/p/original/${image.file_path}`
    )

    return image.slice(0, 3).concat(video.slice(0, 3))
  }

  return (
    <Base>
      <BannerSlider name={name} path={concatImagesAndVideos()} />
      <Container>
        <s.Content>
          <s.TextWrapper>
            <h1>{name}</h1>
            <h2>{overview}</h2>
          </s.TextWrapper>
          <s.MovieInfos>
            <div>
              <MovieInfos
                title="You can watch on:"
                color="#FF80BF"
                items={watchProviders}
              />
            </div>
            <div>
              <MovieInfos
                title="Production companies:"
                color="#FFCA80"
                items={companies}
              />
            </div>
          </s.MovieInfos>
        </s.Content>
      </Container>
    </Base>
  )
}
export default Movie
