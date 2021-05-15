import BannerSlider, { BannerSliderProps } from 'components/BannerSlider'
// import { Container } from 'components/Container'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import slugify from 'slugify'
import Base from 'templates/Base'
// import * as s from './styles'

type ImagesResponse = {
  file_path: string
}

type VideosResponse = {
  key: string
  site: string
  type: string
}

export type MovieProps = {
  id: string
  name: string
  overview: string
  images: ImagesResponse[]
  videos: VideosResponse[]
}

const Movie = ({ id, name, videos, images }: MovieProps) => {
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

  const item: BannerSliderProps = {
    name,
    path: concatImagesAndVideos()
  }

  return (
    <Base>
      <BannerSlider name={item.name} path={item.path} />
    </Base>
  )
}
export default Movie
