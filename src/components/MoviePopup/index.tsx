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
        <>
          <s.Overlay
            aria-hidden={!movie}
            onClick={handleOverlayClick}
            aria-label="Click to close"
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
          />
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
                  <button
                    onClick={handleFavouriteClick}
                    title="Click to favourite"
                    aria-label="Click to favourite"
                  >
                    <Star
                      aria-hidden={false}
                      focusable={true}
                      size={20}
                      role="img"
                      color={favourite ? 'yellow' : '#eee'}
                    />
                  </button>
                  <button
                    onClick={handleWatchLaterClick}
                    title="Click to watch later"
                    aria-label="Click to watch later"
                  >
                    <Tv
                      aria-hidden={false}
                      focusable={true}
                      size={20}
                      role="img"
                      color={watchLater ? 'yellow' : '#eee'}
                    />
                  </button>
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
        </>
      )}
    </>
  )
}
export default MoviePopup
