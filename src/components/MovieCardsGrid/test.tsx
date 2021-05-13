import { render, screen } from '@testing-library/react'

import MovieCardsGrid from '.'

jest.mock('components/MovieCard', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock MovieCard"></div>
    }
  }
})

const props = {
  movies: [
    {
      id: '1',
      img: '/any_path',
      name: 'any_name',
      overview: 'any_overview'
    },
    {
      id: '1',
      img: '/any_path',
      name: 'any_name',
      overview: 'any_overview'
    },
    {
      id: '1',
      img: '/any_path',
      name: 'any_name',
      overview: 'any_overview'
    }
  ]
}

describe('<MovieCardsGrid />', () => {
  it('should render correctly', () => {
    render(<MovieCardsGrid {...props} />)

    expect(screen.getAllByTestId('Mock MovieCard')).toHaveLength(3)
  })
})
