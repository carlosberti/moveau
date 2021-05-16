/* eslint-disable @typescript-eslint/no-var-requires */
import userEvent from '@testing-library/user-event'
import 'match-media.mock'
import { render, screen } from 'utils/test-utils'

import Movie, { MovieTemplateProps } from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

const push = jest.fn()

jest.mock('components/MovieInfos', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock MovieInfos"></div>
    }
  }
})

const props: MovieTemplateProps = {
  id: 1,
  name: 'any_name',
  images: [
    {
      file_path: 'any_path'
    }
  ],
  overview: 'any_overview',
  videos: [{ key: 'any_key', site: 'any_site', type: 'any_type' }],
  companies: ['any_company'],
  watchProviders: ['any_provider'],
  poster_path: 'any_path'
}

describe('<Movie />', () => {
  it('should not call push if name is in url', () => {
    useRouter.mockImplementation(() => ({
      isFallback: true,
      pathname: '/id/any_name',
      push
    }))
    render(<Movie {...props} />)

    expect(push).not.toHaveBeenCalled()
  })

  it('should render correctly', () => {
    useRouter.mockImplementation(() => ({
      isFallback: false,
      pathname: 'any-name',
      push: push
    }))
    render(<Movie {...props} />)

    expect(
      screen.getByRole('heading', { name: 'any_name' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'any_overview' })
    ).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock MovieInfos')).toHaveLength(2)
    expect(
      screen.getByRole('button', { name: /click to favourite/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /click to watch later/i })
    ).toBeInTheDocument()
    expect(push).toHaveBeenCalled()
  })

  it('should add to favourite store on favourite button click', async () => {
    const useFavouriteStore = jest.spyOn(require('store'), 'useFavouriteStore')

    const setFavourite = jest.fn()

    useFavouriteStore.mockImplementation(() => ({
      setFavourite,
      isFavourite: jest.fn(() => true)
    }))

    render(
      <Movie
        {...props}
        overview=""
        videos={[{ site: 'YouTube', key: 'any_key', type: 'any_type' }]}
      />
    )

    const FavouriteButton = screen.getByLabelText(/Click to favourite/i)

    userEvent.click(FavouriteButton)

    expect(setFavourite).toHaveBeenCalled()
  })

  it('should call setIsopen if favourites is open', async () => {
    const useFavouriteStore = jest.spyOn(require('store'), 'useFavouriteStore')

    const setIsOpen = jest.fn()

    useFavouriteStore.mockImplementation(() => ({
      setFavourite: jest.fn(),
      isFavourite: jest.fn(() => true),
      isOpen: true,
      setIsOpen
    }))

    render(<Movie {...props} />)

    expect(setIsOpen).toHaveBeenCalled()
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

    render(<Movie {...props} />)

    const watchLaterButton = screen.getByLabelText(/Click to watch later/i)

    userEvent.click(watchLaterButton)

    expect(setWatchLater).toHaveBeenCalled()
  })

  it('should call setIsopen if watchlater is open', async () => {
    const useWatchLaterStore = jest.spyOn(
      require('store'),
      'useWatchLaterStore'
    )

    const setIsOpen = jest.fn()

    useWatchLaterStore.mockImplementation(() => ({
      setWatchLater: jest.fn(),
      isWatchLater: jest.fn(() => true),
      isOpen: true,
      setIsOpen
    }))

    render(<Movie {...props} />)

    expect(setIsOpen).toHaveBeenCalled()
  })

  it('should return loading if isFallback is true', () => {
    useRouter.mockImplementation(() => ({
      isFallback: true,
      pathname: 'any-name',
      push: jest.fn()
    }))
    render(<Movie {...props} />)

    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })
})
