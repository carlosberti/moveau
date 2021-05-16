/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'

import * as s from './styles'
import { useFavouriteStore, useMovieStore, useWatchLaterStore } from 'store'
import Arrow from 'components/Arrow'
import Star from 'components/Star'
import slugify from 'slugify'

const MoviePopup = () => {
  const favourite = useFavouriteStore((state) => ({
    setFavourite: state.setItems,
    isFavourite: state.isItem
  }))
  const watchLater = useWatchLaterStore((state) => ({
    setWatchLater: state.setItems,
    isWatchLater: state.isItem
  }))
  const movie = useMovieStore((state) => state.movie)
  const removeMovie = useMovieStore((state) => state.removeMovie)

  const handleFavouriteClick = () => {
    favourite.setFavourite({
      id: movie!.id,
      name: movie!.name,
      img: movie!.img,
      overview: movie!.overview
    })
  }

  const handleWatchLaterClick = () => {
    watchLater.setWatchLater({
      id: movie!.id,
      name: movie!.name,
      img: movie!.img,
      overview: movie!.overview
    })
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
                <s.IconsWrapper
                  watchLater={watchLater.isWatchLater(movie.id)}
                  favourite={favourite.isFavourite(movie.id)}
                >
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
              </s.LeftWrapper>
              <s.TextWrapper>
                <h2>{movie.name}</h2>
                <h3>{movie.overview}</h3>
                <button>
                  <Link href={`/${movie.id}/${slugify(movie.name)}`} passHref>
                    <a>{`go to movie's page`}</a>
                  </Link>
                </button>
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
