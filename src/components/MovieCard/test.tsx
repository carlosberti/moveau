/* eslint-disable @typescript-eslint/no-var-requires */
import 'server.mock'
import 'next-image.mock'
import { render, screen, waitFor } from 'utils/test-utils'

import MovieCard from '.'
import userEvent from '@testing-library/user-event'

const props = {
  id: '1',
  img: '/any_path',
  name: 'Aladdin',
  overview: 'any_overview'
}

describe('<MovieCard />', () => {
  it('should render correctly', () => {
    render(<MovieCard {...props} />)

    const img = screen.getByRole('img', { name: 'Aladdin' })

    expect(screen.getByLabelText(/click to open/i)).toBeInTheDocument()
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/any_path')
    expect(screen.getByText(/aladdin/i)).toBeInTheDocument()
  })

  it('should add movie onClick', async () => {
    render(<MovieCard {...props} />)

    const card = screen.getByLabelText(/click to open/i)

    expect(card.getAttribute('tabIndex')).toBe('0')

    userEvent.click(card)

    await waitFor(() => expect(card.getAttribute('tabIndex')).toBe('-1'))
  })

  it('should add to watchlater store on watch later button click', async () => {
    const useWatchLaterStore = jest.spyOn(
      require('store'),
      'useWatchLaterStore'
    )

    const setWatchLater = jest.fn()

    useWatchLaterStore.mockImplementation(() => ({
      setWatchLater,
      isWatchLater: jest.fn(() => true)
    }))

    render(<MovieCard {...props} />)

    const watchLaterButton = screen.getByLabelText(/Click to watch later/i)

    userEvent.click(watchLaterButton)

    expect(setWatchLater).toHaveBeenCalled()
  })

  it('should add to favourite store on favourite button click', async () => {
    const useFavouriteStore = jest.spyOn(require('store'), 'useFavouriteStore')

    const setFavourite = jest.fn()

    useFavouriteStore.mockImplementation(() => ({
      setFavourite,
      isFavourite: jest.fn(() => true)
    }))

    render(<MovieCard {...props} />)

    const FavouriteButton = screen.getByLabelText(/Click to favourite/i)

    userEvent.click(FavouriteButton)

    expect(setFavourite).toHaveBeenCalled()
  })
})
