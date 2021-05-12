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

jest.mock('components/MoviePopup', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock MoviePopup"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render correctly', () => {
    render(<Home movies={movies} />)

    expect(screen.getByTestId('Mock MovieCardsGrid')).toBeInTheDocument()
    expect(screen.queryByTestId('Mock MoviePopup')).not.toBeInTheDocument()
  })

  it('should render popup', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const movie = jest.spyOn(require('store'), 'useMovieStore')
    movie.mockImplementation(() => ({
      movies: {
        id: '1',
        img: '/assets/img/aladdin.jpeg',
        name: 'Aladdin asdkfbkasjldf lsahdf asjdhf asj ',
        overview:
          'kjahbsf hjksadf jkhasdf kjahsdf jkasdhf jkasdf jkhasd fjhsad fkj,ashdf jklasdhf kjasdhf kjasd fjkasdhf jkasdhf jkahsdf jksahd fjkasd fjha'
      }
    }))

    render(<Home movies={movies} />)

    expect(screen.queryByTestId('Mock MoviePopup')).toBeInTheDocument()
  })
})
