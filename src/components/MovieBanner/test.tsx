import 'next-image.mock'

import { render, screen } from '@testing-library/react'

import MovieBanner from '.'

describe('<MovieBanner />', () => {
  it('should render image', () => {
    render(
      <MovieBanner
        path="https://image.tmdb.org/t/p/original/RA2FjGBj1zMEEblkcXkpTthXzK.jpg"
        name="Aladdin"
      />
    )

    expect(screen.getByRole('img', { name: 'Aladdin' })).toBeInTheDocument()
  })
  it('should render video', () => {
    render(<MovieBanner path="any_path" name="Aladdin" />)

    expect(screen.getByLabelText(/aladdin/i)).toBeInTheDocument()
  })
})
