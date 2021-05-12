import { render, screen } from '@testing-library/react'
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

describe('<Home />', () => {
  it('should render correctly', () => {
    render(<Home movies={movies} />)

    expect(screen.getByTestId('Mock MovieCardsGrid')).toBeInTheDocument()
  })
})
