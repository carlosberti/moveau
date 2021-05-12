import Image from 'next/image'
import { Star } from '@styled-icons/fa-regular'
import { Tv } from '@styled-icons/boxicons-regular'

import * as s from './styles'
import { useState } from 'react'

export type MoviePopupProps = {
  img: string
  name: string
  overview: string
  video: string
  id: string
}

const MoviePopup = ({ img, name, overview, video }: MoviePopupProps) => {
  const [watchLater, setWatchLater] = useState(false)
  const [favourite, setFavourite] = useState(false)

  const handleFavouriteClick = () => {
    setFavourite(!favourite)
  }

  const handleWatchLaterClick = () => {
    setWatchLater(!watchLater)
  }

  return (
    <s.Wrapper>
      <s.Content>
        <s.LeftWrapper>
          <Image src={img} alt={name} width={200} height={287} />
          <s.IconsWrapper>
            <Star
              aria-hidden={false}
              focusable={true}
              size={20}
              role="button"
              color={favourite ? 'yellow' : '#eee'}
              title="Click to favourite"
              aria-label="Click to favourite"
              onClick={handleFavouriteClick}
            />
            <Tv
              aria-hidden={false}
              focusable={true}
              size={20}
              role="button"
              color={watchLater ? 'yellow' : '#eee'}
              title="Click to watch later"
              aria-label="Click to watch later"
              onClick={handleWatchLaterClick}
            />
          </s.IconsWrapper>
        </s.LeftWrapper>
        <s.TextWrapper>
          <h2>{name}</h2>
          <h3>{overview}</h3>
        </s.TextWrapper>
      </s.Content>
      <iframe
        width="430"
        height="287"
        src={`https://www.youtube.com/embed/${video}`}
        title="Movie video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        aria-label={`${name} trailer`}
      ></iframe>
    </s.Wrapper>
  )
}
export default MoviePopup
