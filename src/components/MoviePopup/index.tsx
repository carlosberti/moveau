import { Star } from '@styled-icons/fa-regular'
import { Tv } from '@styled-icons/boxicons-regular'

import * as s from './styles'
import { useState } from 'react'
import { useMovieStore } from 'store'

const MoviePopup = () => {
  const [watchLater, setWatchLater] = useState(false)
  const [favourite, setFavourite] = useState(false)
  const movie = useMovieStore((state) => state.movie)
  const removeMovie = useMovieStore((state) => state.removeMovie)

  const handleFavouriteClick = () => {
    setFavourite(!favourite)
  }

  const handleWatchLaterClick = () => {
    setWatchLater(!watchLater)
  }

  const handleOverlayClick = () => {
    document.querySelector('body')!.style.overflow = 'auto'
    removeMovie()
  }

  return (
    <>
      {movie && (
        <s.Wrapper isOpen={!!movie}>
          <s.Overlay aria-hidden={!movie} onClick={handleOverlayClick} />
          <s.Content aria-hidden={!movie}>
            <s.TopWrapper>
              <s.LeftWrapper>
                <img
                  src={movie.img}
                  alt={movie.name}
                  width={200}
                  height={287}
                />
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
                <h2>{movie.name}</h2>
                <h3>{movie.overview}</h3>
              </s.TextWrapper>
            </s.TopWrapper>
            {movie.video && (
              <iframe
                width="430"
                height="287"
                src={`https://www.youtube.com/embed/${movie.video}`}
                title="Movie video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                aria-label={`${movie.name} trailer`}
              ></iframe>
            )}
          </s.Content>
        </s.Wrapper>
      )}
    </>
  )
}
export default MoviePopup
