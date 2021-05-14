import 'server.mock'
import { act, render, screen, waitFor } from 'utils/test-utils'
import { movies } from 'components/MovieCardsGrid/mocks'

import Home from '.'
import userEvent from '@testing-library/user-event'

jest.mock('components/MovieCardsGrid', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock MovieCardsGrid"></div>
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

const mockIntersectionObserver = jest.fn()
mockIntersectionObserver.mockReturnValue({
  observe: () => null
})
window.IntersectionObserver = mockIntersectionObserver

describe('<Home />', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })
  afterAll(() => {
    jest.clearAllTimers()
  })

  it('should render correctly', () => {
    render(<Home movies={movies} />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByTestId('Mock MovieCardsGrid')).toBeInTheDocument()
    expect(screen.queryByTestId('Mock MoviePopup')).toBeInTheDocument()
    expect(screen.getByLabelText('Loading more')).toBeInTheDocument()
    expect(window.IntersectionObserver).toHaveBeenCalled()
  })

  it('should have typed keys on input', async () => {
    render(<Home movies={movies} />)

    const input = screen.getByRole('textbox')

    act(() => {
      userEvent.type(input, 'test')
      jest.runTimersToTime(2000)
    })

    await waitFor(() => expect(input).toHaveValue('test'))

    act(() => {
      userEvent.clear(input)
      jest.runTimersToTime(2000)
    })

    await waitFor(() => expect(input).toHaveValue(''))
  })
})
