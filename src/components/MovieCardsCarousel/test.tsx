import { render, screen } from '@testing-library/react'

import MovieCardsCarousel from '.'

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
      img: '/any_path1',
      name: 'any_name'
    },
    {
      id: '1',
      img: '/any_path2',
      name: 'any_name'
    },
    {
      id: '1',
      img: '/any_path3',
      name: 'any_name'
    }
  ]
}

describe('<MovieCardsCarousel />', () => {
  it('should render correctly', () => {
    render(<MovieCardsCarousel {...props} />)

    expect(screen.getAllByTestId('Mock MovieCard')).toHaveLength(3)
  })
})
