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
  setIsOpen: jest.fn(() => true),
  isOpen: false
}))

const useFavouriteStore = jest.spyOn(require('store'), 'useFavouriteStore')

useFavouriteStore.mockImplementation(() => ({
  setIsOpen: jest.fn(() => true),
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
    expect(screen.getAllByText('no items found')).toHaveLength(2)
    expect(
      screen
        .getAllByText('no items found')[0]
        .parentElement!.getAttribute('aria-hidden')
    ).toBe('true')
    expect(
      screen
        .getAllByText('no items found')[1]
        .parentElement!.getAttribute('aria-hidden')
    ).toBe('true')
    expect(screen.queryByTestId('Mock MoviePopup')).toBeInTheDocument()
  })

  it('should set selection modal aria-hidden false on select button click', () => {
    render(
      <Base>
        <h1>movieau</h1>
      </Base>
    )

    userEvent.click(screen.getByRole('button', { name: /watch later/i }))
    userEvent.click(screen.getByRole('button', { name: /favourites/i }))

    expect(
      screen
        .getAllByText('no items found')[0]
        .parentElement!.getAttribute('aria-hidden')
    ).toBe('false')
    expect(
      screen
        .getAllByText('no items found')[1]
        .parentElement!.getAttribute('aria-hidden')
    ).toBe('false')
  })
})
