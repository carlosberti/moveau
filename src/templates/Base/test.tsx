/* eslint-disable @typescript-eslint/no-var-requires */
import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'

import Base from '.'

jest.mock('components/Logo', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Logo"></div>
    }
  }
})

jest.mock('components/SelectionModal', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock SelectionModal"></div>
    }
  }
})

jest.mock('components/MoviePopup', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock MoviePopup"></div>
    }
  }
})

const useWatchLaterStore = jest.spyOn(require('store'), 'useWatchLaterStore')

useWatchLaterStore.mockImplementation(() => ({
  setIsOpen: jest.fn(),
  isOpen: false
}))

const useFavouriteStore = jest.spyOn(require('store'), 'useFavouriteStore')

useFavouriteStore.mockImplementation(() => ({
  setIsOpen: jest.fn(),
  isOpen: false
}))

describe('<Base />', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })
  it('should render correctly', () => {
    render(
      <Base>
        <h1>movieau</h1>
      </Base>
    )

    expect(
      screen.getByRole('heading', { name: /movieau/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId('Mock Logo')).toBeInTheDocument()
    expect(
      screen.getByLabelText(/click to open favourites/i)
    ).toBeInTheDocument()
    expect(
      screen.getByLabelText(/click to open watch later/i)
    ).toBeInTheDocument()
    expect(screen.queryByTestId('Mock SelectionModal')).not.toBeInTheDocument()
    expect(screen.queryByTestId('Mock MoviePopup')).toBeInTheDocument()
  })

  it('should open selection modal when watch later or favourite button is clicked', () => {
    render(
      <Base>
        <h1>movieau</h1>
      </Base>
    )
    userEvent.click(screen.getByLabelText(/click to open favourites/i))
    userEvent.click(screen.getByLabelText(/click to open watch later/i))

    expect(screen.queryAllByTestId('Mock SelectionModal')).toHaveLength(2)
  })
})
