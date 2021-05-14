import { render, screen } from 'utils/test-utils'
import { movies } from 'components/MovieCardsGrid/mocks'

import Home from '.'

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
  it('should render correctly', () => {
    render(<Home movies={movies} />)

    expect(screen.getByTestId('Mock MovieCardsGrid')).toBeInTheDocument()
    expect(screen.queryByTestId('Mock MoviePopup')).toBeInTheDocument()
  })
})
