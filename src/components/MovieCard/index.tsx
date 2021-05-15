import Image from 'next/image'
import { useState } from 'react'

import { MoviePopupProps, useFavouriteStore, useMovieStore } from 'store'
import { getVideos } from 'client'
import Star from 'components/Star'
import Arrow from 'components/Arrow'
import * as s from './styles'

export type MovieCardProps = {
  id: string
  img: string
  name: string
  overview: string
  width?: number
  height?: number
}

const MovieCard = ({
  id,
  img,
  name,
  overview,
  width = 131,
  height = 188
}: MovieCardProps) => {
  const [watchLater, setWatchLater] = useState(false)
  const [favourite, setFavourite] = useState(false)
  const addFavourite = useFavouriteStore((state) => state.addFavourite)
  const addMovie = useMovieStore((state) => state.addMovie)
  const movie = useMovieStore((state) => state.movie)

  const handleClick = async () => {
    const response = await getVideos({ id })

    const trailers = response.filter(
      (video) => video.type.match(/trailer/i) && video.site.match(/youtube/i)
    )

    const movies: MoviePopupProps = {
      overview,
      id,
      name,
      img,
      video: trailers.length > 0 && trailers[0].key
    }
    document.querySelector('body')!.style.overflow = 'hidden'
    addMovie(movies)
  }

  const handleFavouriteClick = () => {
    addFavourite({ id, name, img })
    setFavourite(!favourite)
  }

  const handleWatchLaterClick = () => {
    setWatchLater(!watchLater)
  }

  return (
    <s.Wrapper>
      <s.Content
        onClick={handleClick}
        title="Click to open more infos"
        aria-label="Click to open more infos"
        tabIndex={movie ? -1 : 0}
      >
        <s.ImageBox>
          <Image src={img} alt={name} width={width} height={height} />
        </s.ImageBox>
        <p>{name}</p>
      </s.Content>
      <s.IconsWrapper watchLater={watchLater} favourite={favourite}>
        <button
          onClick={handleFavouriteClick}
          title="Click to favourite"
          aria-label="Click to favourite"
        >
          <Star />
        </button>
        <button
          onClick={handleWatchLaterClick}
          title="Click to watch later"
          aria-label="Click to watch later"
        >
          <Arrow />
        </button>
      </s.IconsWrapper>
    </s.Wrapper>
  )
}

export default MovieCard
