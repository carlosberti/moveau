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
      img: '/any_path',
      name: 'any_name'
    },
    {
      img: '/any_path',
      name: 'any_name'
    },
    {
      img: '/any_path',
      name: 'any_name'
    }
  ]
}

describe('<MovieCardsGrid />', () => {
  it('should render correctly', () => {
    render(<MovieCardsGrid {...props} />)

    expect(screen.getAllByTestId('Mock MovieCard')).toHaveLength(3)
  })
})
