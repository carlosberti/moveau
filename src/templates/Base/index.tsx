import { Container } from 'components/Container'
import Logo from 'components/Logo'
import MoviePopup from 'components/MoviePopup'
import SelectionButton from 'components/SelectionButton'
import SelectionModal from 'components/SelectionModal'
import Link from 'next/link'
import { useFavouriteStore, useWatchLaterStore } from 'store'
import * as s from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  const favourites = useFavouriteStore((state) => ({
    setIsOpen: state.setIsOpen,
    isOpen: state.isOpen
  }))

  const watchLater = useWatchLaterStore((state) => ({
    setIsOpen: state.setIsOpen,
    isOpen: state.isOpen
  }))

  const handleFavouritesClick = () => {
    favourites.setIsOpen()
  }

  const handleWatchLaterClick = () => {
    watchLater.setIsOpen()
  }

  return (
    <s.Wrapper>
      <MoviePopup />
      <s.FloatButtons>
        <SelectionButton
          onClick={handleFavouritesClick}
          buttonText="favourites"
        />
        <SelectionButton
          onClick={handleWatchLaterClick}
          buttonText="watch later"
        />
      </s.FloatButtons>
      {favourites.isOpen && (
        <SelectionModal
          title="favourites"
          buttonText="clear favourites"
          store={useFavouriteStore}
        />
      )}
      {watchLater.isOpen && (
        <SelectionModal
          title="watch later"
          buttonText="clear watch later"
          store={useWatchLaterStore}
        />
      )}
      <s.Header>
        <Container>
          <Link href="/" passHref>
            <s.LogoWrapper>
              <Logo hideOnMobile />
            </s.LogoWrapper>
          </Link>
        </Container>
      </s.Header>
      <s.Content>{children}</s.Content>
    </s.Wrapper>
  )
}
export default Base
